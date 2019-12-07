/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.netbeans.html.presenters.render;

import com.sun.jna.Pointer;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.URI;
import java.util.Arrays;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.netbeans.html.boot.spi.Fn;

/** Support for displaying browser.
 */
public abstract class Show {
    static final Logger LOG = Logger.getLogger(Show.class.getName());

    Show() {
    }
    
    /** Shows a page in a browser.
     * 
     * @param impl the name of implementation to use, can be <code>null</code>
     * @param page the page URL
     * @throws IOException if something goes wrong
     */
    public static void show(String impl, URI page) throws IOException {
        try {
            LOG.log(Level.FINE, "Trying to load {0}", impl);
            Class<?> c = Class.forName(Show.class.getPackage().getName() + '.' + impl);
            LOG.log(Level.FINEST, "Class has been loaded {0}", c);
            Show show = (Show) c.newInstance();
            LOG.log(Level.FINEST, "Instance has been created {0}", show);
            show.show(page);
            LOG.log(Level.FINEST, "show() finished successfully!");
        } catch (IOException ex) {
            throw ex;
        } catch (Exception ex) {
            LOG.log(Level.FINE, "Exception while loading " + impl, ex);
            if (impl == null) {
                impl = "xdg-open";
            }
            LOG.log(Level.INFO, "Trying command line execution of {0}", impl);
            String[] cmdArr = {
                impl, page.toString()
            };
            LOG.log(Level.INFO, "Launching {0}", Arrays.toString(cmdArr));
            final Process process = new ProcessBuilder().inheritIO().command(cmdArr).start();
            try {
                process.waitFor();
            } catch (InterruptedException ex1) {
                throw (InterruptedIOException) new InterruptedIOException().initCause(ex1);
            }
        }
    }
    
    /** Initializes native browser window.
     * 
     * @param presenter the presenter that will be using the returned value
     * @param onPageLoad callback when page finishes loading
     * @param onContext callback when {@link #jsContext()} becomes available
     * @param headless should the window appear on the monitor or not?
     *   useful for testing
     * @return object to query and control the browser window
     */
    public static Show open(Fn.Presenter presenter, Runnable onPageLoad, Runnable onContext, boolean headless) {
        boolean isMac = System.getProperty("os.name").contains("Mac");
        return isMac ?
            new Cocoa(presenter, onPageLoad, onContext, headless) :
            new GTK(presenter, onPageLoad, onContext, headless);
    }

    /** Loads a page into the browser window.
     * 
     * @param page the URL to load
     * @throws IOException if something goes wrong
     */
    public abstract void show(URI page) throws IOException;
    
    /** Access to JavaScriptCore API of the browser window.
     * @return JavaScriptCore instance or <code>null</code> if not supported
     *   for this browser
     */
    public abstract JSC jsc();

    /** Access to JavaScriptCore context.
     * @return the context or <code>null</code> if not supported or not 
     *   yet available
     */
    public abstract Pointer jsContext();
    
    /** Executes a runnable on "UI thread".
     * @param command runnable to execute
     */
    public abstract void execute(Runnable command);
}
