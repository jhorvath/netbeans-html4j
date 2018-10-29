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
package org.netbeans.html.json.spi;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import net.java.html.BrwsrCtx;
import net.java.html.json.ComputedProperty;
import net.java.html.json.Model;
import net.java.html.json.Models;
import net.java.html.json.Property;
import org.netbeans.html.json.impl.Bindings;
import org.netbeans.html.json.impl.JSON;
import org.netbeans.html.json.impl.JSON.WS;
import org.netbeans.html.json.impl.JSONList;
import org.netbeans.html.json.impl.PropertyBindingAccessor;
import org.netbeans.html.json.impl.RcvrJSON;
import org.netbeans.html.json.impl.RcvrJSON.MsgEvnt;
import org.netbeans.html.json.impl.SimpleList;

/** Object associated with one instance of a model generated by the
 * {@link Model} annotation. Contains methods the generated class can
 * use to communicate with behind the scene associated {@link Technology}.
 * Each {@link Proto} object is associated with <a href="http://wiki.apidesign.org/wiki/Singletonizer">
 * singletonizer</a>-like interface {@link Type} which provides the
 * associated {@link Technology} the necessary information about the
 * generated {@link Model} class.
 *
 * @author Jaroslav Tulach
 * @since 0.7
 */
public final class Proto {
    private final Object obj;
    private final Type type;
    private final net.java.html.BrwsrCtx context;
    private org.netbeans.html.json.impl.Bindings ko;
    private Observers observers;
    private Observers.Usages usages;

    Proto(Object obj, Type type, BrwsrCtx context) {
        this.obj = obj;
        this.type = type;
        this.context = context;
    }

    /** Browser context this proto object and its associated model
     * are operating-in.
     *
     * @return the associated context
     */
    public BrwsrCtx getContext() {
        return context;
    }

    /** Acquires global lock to compute a {@link ComputedProperty derived property}
     * on this proto object. This proto object must not be locked yet. No
     * dependency tracking is performed.
     *
     * @throws IllegalStateException if already locked
     */
    public void acquireLock() throws IllegalStateException {
        acquireLock(null);
    }

    /** Acquires global lock to compute a {@link ComputedProperty derived property}
     * on this proto object. This proto object must not be locked yet. The
     * name of the property is used to track dependencies on own
     * properties of other proto objects - when they are changed, this
     * {@link #valueHasMutated(java.lang.String) property is changed too}.
     *
     * @param propName name of property we are about to compute
     * @throws IllegalStateException thrown when there is a cyclic
     *   call is detected
     * @since 0.9
     */
    public void acquireLock(String propName) throws IllegalStateException {
        usages = Observers.beginComputing(this, propName, usages);
    }

    /** A property on this proto object is about to be accessed. Verifies
     * whether this proto object is accessible - e.g. it has not been
     * {@link #acquireLock() locked yet}. If everything is OK, the
     * <code>propName</code> is recorded in the chain of dependencies
     * tracked by {@link #acquireLock(java.lang.String)} and watched by
     * {@link #valueHasMutated(java.lang.String)}.
     *
     * @param propName name of the property that is requested
     * @throws IllegalStateException if the model is locked
     * @since 0.9
     */
    public void accessProperty(String propName) throws IllegalStateException {
        Observers.accessingValue(this, propName);
    }

    /** Verifies the model is not locked otherwise throws an exception.
     * @throws IllegalStateException if the model is locked
     */
    public void verifyUnlocked() throws IllegalStateException {
        Observers.verifyUnlocked(this);
    }

    /** When modifications are over, the model is switched into
     * unlocked state by calling this method.
     */
    public void releaseLock() {
        Observers.finishComputing(this);
    }

    /** Whenever model changes a property. It should notify the
     * associated technology by calling this method.
     * Since 0.8.3: This method may be called by any thread - it reschedules
     * its actual execution into appropriate one by using
     * {@link BrwsrCtx#execute(java.lang.Runnable)}.
     *
     * @param propName name of the changed property
     */
    public void valueHasMutated(final String propName) {
        context.execute(new Runnable() {
            @Override
            public void run() {
                if (ko != null) {
                    ko.valueHasMutated(propName, null, null);
                }
                Observers.valueHasMutated(Proto.this, propName);
            }
        });
    }

    /** Whenever model changes a property it should notify the
     * associated technology. Either by calling this method
     * (if the new value is known and different to the old one) or
     * via (slightly ineffective) {@link #valueHasMutated(java.lang.String)}
     * method.
     * Since 0.8.3: This method may be called by any thread - it reschedules
     * its actual execution into appropriate one by using
     * {@link BrwsrCtx#execute(java.lang.Runnable)}.
     *
     * @param propName name of the changed property
     * @param oldValue provides previous value of the property
     * @param newValue provides new value of the property
     * @since 0.7.6
     */
    public void valueHasMutated(
        final String propName, final Object oldValue, final Object newValue
    ) {
        context.execute(new Runnable() {
            @Override
            public void run() {
                if (ko != null) {
                    ko.valueHasMutated(propName, oldValue, newValue);
                }
                Observers.valueHasMutated(Proto.this, propName);
            }
        });
    }

    /** Initializes the associated model in the current {@link #getContext() context}.
     * In case of <em>knockout.js</em> technology, applies given bindings
     * of the current model to the <em>body</em> element of the page.
     */
    public void applyBindings() {
        initBindings(null).applyBindings(null);
    }

    /** Initializes the associated model to the specified element's subtree.
     * The technology is taken from the current {@link #getContext() context} and
     * in case of <em>knockout.js</em> applies given bindings
     * of the current model to the element of the page with 'id' attribute
     * set to the specified <code>id</code> value.
     *
     * @param id the id of element to apply the binding to
     * @since 1.1
     * @see Technology.ApplyId
     */
    public void applyBindings(String id) {
        initBindings(null).applyBindings(id);
    }

    /** Invokes the provided runnable in the {@link #getContext() context}
     * of the browser. If the caller is already on the right thread, the
     * <code>run.run()</code> is invoked immediately and synchronously.
     * Otherwise the method returns immediately and the <code>run()</code>
     * method is performed later
     *
     * @param run the action to execute
     */
    public void runInBrowser(Runnable run) {
        context.execute(run);
    }

    /** Invokes the specified function index in the {@link #getContext() context}
     * of the browser. If the caller is already on the right thread, the
     * index-th function is invoked immediately and synchronously.
     * Otherwise the method returns immediately and the function is invoked
     * later.
     *
     * @param index the index of the function as will be passed to
     *   {@link Type#call(java.lang.Object, int, java.lang.Object, java.lang.Object)}
     *   method
     * @param args array of arguments that will be passed as
     *   <code>data</code> argument of the <code>call</code> method.
     * @since 0.7.6
     */
    public void runInBrowser(final int index, final Object... args) {
        context.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    type.call(obj, index, args, null);
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        });
    }

    /** Initializes the provided collection with a content of the <code>array</code>.
     * The initialization can only be done soon after the the collection
     * is created, otherwise an exception is throw
     *
     * @param to the collection to initialize (assumed to be empty)
     * @param array the array to add to the collection
     * @throws IllegalStateException if the system has already been initialized
     */
    public void initTo(Collection<?> to, Object array) {
        if (ko != null) {
            throw new IllegalStateException();
        }
        if (to instanceof JSONList) {
           ((JSONList)to).init(array);
        } else {
            JSONList.init(to, array);
        }
    }

    /** Takes an object representing JSON result and extract some of its
     * properties. It is assumed that the <code>props</code> and
     * <code>values</code> arrays have the same length.
     *
     * @param json the JSON object (actual type depends on the associated
     *   {@link Technology})
     * @param props list of properties to extract
     * @param values array that will be filled with extracted values
     */
    public void extract(Object json, String[] props, Object[] values) {
        JSON.extract(context, json, props, values);
    }

    /** Converts raw JSON <code>data</code> into a Java {@link Model} class.
     *
     * @param <T> type of the model class
     * @param modelClass the type of the class to create
     * @param data the raw JSON data
     * @return newly created instance of the model class
     */
    public <T> T read(Class<T> modelClass, Object data) {
        return JSON.read(context, modelClass, data);
    }

    /** Initializes asynchronous JSON connection to specified URL. Delegates
     * to {@link #loadJSON(int, java.lang.String, java.lang.String, java.lang.String, java.lang.Object, java.lang.Object...) }
     * with no extra parameters.
     *
     * @param index the callback index to be used when a reply is received
     *   to call {@link Type#onMessage(java.lang.Object, int, int, java.lang.Object)}.
     *
     * @param urlBefore the part of the URL before JSON-P callback parameter
     * @param urlAfter the rest of the URL or <code>null</code> if no JSON-P is used
     * @param method method to use for connection to the server
     * @param data string, number or a {@link Model} generated class to send to
     *    the server when doing a query
     */
    public void loadJSON(final int index,
        String urlBefore, String urlAfter, String method,
        final Object data
    ) {
        loadJSON(index, urlBefore, urlAfter, method, data, new Object[0]);
    }

    /** Initializes asynchronous JSON connection to specified URL. The
     * method returns immediately and later does callback later.
     *
     * @param index the callback index to be used when a reply is received
     *   to call {@link Type#onMessage(java.lang.Object, int, int, java.lang.Object)}.
     *
     * @param urlBefore the part of the URL before JSON-P callback parameter
     * @param urlAfter the rest of the URL or <code>null</code> if no JSON-P is used
     * @param method method to use for connection to the server
     * @param data string, number or a {@link Model} generated class to send to
     *    the server when doing a query
     * @param params extra params to pass back when calling
     *   {@link Type#onMessage(java.lang.Object, int, int, java.lang.Object, java.lang.Object[])}
     * @since 0.8.1
     */
    public void loadJSON(final int index,
        String urlBefore, String urlAfter, String method,
        final Object data, final Object... params
    ) {
        loadJSONWithHeaders(index, null, urlBefore, urlAfter, method, data, params);
    }

    /** Initializes asynchronous JSON connection to specified URL. The
     * method returns immediately and later does callback later.
     *
     * @param index the callback index to be used when a reply is received
     *   to call {@link Type#onMessage(java.lang.Object, int, int, java.lang.Object)}.
     *
     * @param headers headers to use for the request or <code>null</code> to use default ones
     * @param urlBefore the part of the URL before JSON-P callback parameter
     * @param urlAfter the rest of the URL or <code>null</code> if no JSON-P is used
     * @param method method to use for connection to the server
     * @param data string, number or a {@link Model} generated class to send to
     *    the server when doing a query
     * @param params extra params to pass back when calling
     *   {@link Type#onMessage(java.lang.Object, int, int, java.lang.Object, java.lang.Object[])}
     * @since 1.2
     */
    public void loadJSONWithHeaders(final int index,
        String headers,
        String urlBefore, String urlAfter, String method,
        final Object data, final Object... params
    ) {
        class Rcvr extends RcvrJSON {
            @Override
            protected void onMessage(MsgEvnt msg) {
                type.onMessage(obj, index, 1, msg.getValues(), params);
            }

            @Override
            protected void onError(MsgEvnt msg) {
                type.onMessage(obj, index, 2, msg.getException(), params);
            }
        }
        JSONCall call = PropertyBindingAccessor.createCall(
            context, new Rcvr(), headers, urlBefore, urlAfter, method, data
        );
        Transfer t = JSON.findTransfer(context);
        t.loadJSON(call);
    }

    /** Opens new WebSocket connection to the specified URL.
     *
     * @param index the index to use later during callbacks to
     *   {@link Type#onMessage(java.lang.Object, int, int, java.lang.Object)}
     * @param url the <code>ws://</code> or <code>wss://</code> URL to connect to
     * @param data data to send to server (usually <code>null</code>)
     * @return returns a non-null object representing the socket
     *   which can be used when calling {@link #wsSend(java.lang.Object, java.lang.String, java.lang.Object) }
     */
    public Object wsOpen(final int index, String url, Object data) {
        class WSrcvr extends RcvrJSON {
            @Override
            protected void onError(MsgEvnt msg) {
                type.onMessage(obj, index, 2, msg.getException());
            }

            @Override
            protected void onMessage(MsgEvnt msg) {
                type.onMessage(obj, index, 1, msg.getValues());
            }

            @Override
            protected void onClose(MsgEvnt msg) {
                type.onMessage(obj, index, 3, null);
            }

            @Override
            protected void onOpen(MsgEvnt msg) {
                type.onMessage(obj, index, 0, null);
            }
        }
        WS ws = WS.create(JSON.findWSTransfer(context), new WSrcvr());
        ws.send(context, null, url, data);
        return ws;
    }

    /** Sends a message to existing socket.
     *
     * @param webSocket the socket to send message to
     * @param url the <code>ws://</code> or <code>wss://</code> URL to connect to,
     *    preferably the same as the one used when the socket was
     *    {@link #wsOpen(int, java.lang.String, java.lang.Object) opened}
     * @param data the data to send or <code>null</code> if the socket is
     *    supposed to be closed
     */
    public void wsSend(Object webSocket, String url, Object data) {
        ((JSON.WS)webSocket).send(context, null, url, data);
    }

    /** Converts raw data (one of its properties) to string representation.
     *
     * @param data the object
     * @param propName the name of object property or <code>null</code>
     *   if the whole object should be converted
     * @return the string representation of the object or its property
     */
    public String toString(Object data, String propName) {
        return JSON.toString(context, data, propName);
    }

    /** Converts raw data (one of its properties) to a number representation.
     *
     * @param data the object
     * @param propName the name of object property or <code>null</code>
     *   if the whole object should be converted
     * @return the number representation of the object or its property
     */
    public Number toNumber(Object data, String propName) {
        return JSON.toNumber(context, data, propName);
    }

    /** Converts raw JSON data into a {@link Model} class representation.
     *
     * @param <T> type of the model to create
     * @param type class of the model to create
     * @param data raw JSON data (depends on associated {@link Technology})
     * @return new instances of the model class filled with values from the
     *   <code>data</code> object
     */
    public <T> T toModel(Class<T> type, Object data) {
        return JSON.toModel(context, type, data, null);
    }

    /** Creates new JSON like observable list.
     *
     * @param <T> the type of the list elements
     * @param propName name of a property this list is associated with
     * @param onChange index of the property to use when the list is modified
     *   during callback to {@link Type#onChange(java.lang.Object, int)}.
     *   If the value is {@link Integer#MIN_VALUE}, then the list is
     *   not fully {@link Property#mutable()} and throws {@link UnsupportedOperationException}
     *   on such attempts.
     * @param dependingProps the array of {@link ComputedProperty derived properties}
     *   that depend on the value of the list
     * @return new, empty list associated with this proto-object and its model
     */
    public <T> List<T> createList(String propName, int onChange, String... dependingProps) {
        return new JSONList<T>(this, propName, onChange, dependingProps);
    }

    /** Copies content of one collection to another, re-assigning all its
     * elements from their current context to the new <code>ctx</code>.
     *
     * @param <T> type of the collections
     * @param to the target collection to be filled with cloned values
     * @param ctx context for the new collection
     * @param from original collection with its data
     */
    public <T> void cloneList(Collection<T> to, BrwsrCtx ctx, Collection<T> from) {
        Boolean isModel = null;
        for (T t : from) {
            if (isModel == null) {
                isModel = JSON.isModel(t.getClass());
            }
            if (isModel) {
                to.add(JSON.bindTo(t, ctx));
            } else {
                to.add(t);
            }
        }
    }

    //
    // internal state
    //

    final String toStr() {
        return "Proto[" + obj + "]@" + Integer.toHexString(System.identityHashCode(this));
    }

    final Bindings initBindings(Object originalObject) {
        if (ko == null) {
            Bindings b = Bindings.apply(context);
            PropertyBinding[] pb = new PropertyBinding[type.properties.size()];
            for (int i = 0; i < pb.length; i++) {
                final PropertyInfo info = (PropertyInfo) type.properties.get(i);
                if (info != null) {
                    pb[i] = b.registerProperty(info.name, i, obj, type, info.type);
                }
            }
            FunctionBinding[] fb = new FunctionBinding[type.functions.size()];
            for (int i = 0; i < fb.length; i++) {
                final String fnName = (String) type.functions.get(i);
                if (fnName != null) {
                    fb[i] = FunctionBinding.registerFunction(fnName, i, obj, type);
                }
            }
            ko = b;
            b.finish(obj, originalObject, pb, fb);
        }
        return ko;
    }

    final Bindings getBindings() {
        return ko;
    }

    final void onChange(int index) {
        type.onChange(obj, index);
    }

    final Observers observers(boolean create) {
        if (create && observers == null) {
            observers = new Observers();
        }
        return observers;
    }

    private static class PropertyInfo {
        final String name;
        final byte type;

        PropertyInfo(String name, byte type) {
            this.name = name;
            this.type = type;
        }
    }

    /** Functionality used by the code generated by annotation
     * processor for the {@link net.java.html.json.Model} annotation.
     *
     * @param <Model> the generated class
     * @since 0.7
     */
    public static abstract class Type<Model> {
        final Class<? extends Model> clazz;
        final java.util.List<PropertyInfo> properties;
        final java.util.List<String> functions;

        /** Constructor for subclasses generated by the annotation processor
         * associated with {@link net.java.html.json.Model} annotation.
         *
         * @param clazz the generated model class
         * @param modelFor the original class annotated by the {@link net.java.html.json.Model} annotation.
         * @param properties number of properties the class has
         * @param functions  number of functions the class has
         */
        protected Type(
            Class<? extends Model> clazz, Class<?> modelFor, int properties, int functions
        ) {
            this.clazz = clazz;
            this.properties = SimpleList.asList(new PropertyInfo[properties]);
            this.functions = SimpleList.asList(new String[functions]);
            JSON.register(clazz, this);
        }

        /** Registers property for the type. It is expected each index
         * is initialized only once.
         *
         * @param name name of the property
         * @param index index of the property
         * @param readOnly is the property read only?
         */
        protected final void registerProperty(String name, int index, boolean readOnly) {
            registerProperty(name, index, readOnly, false);
        }

        /** Registers property for the type. It is expected each index
         * is initialized only once. The difference between <code>readOnly</code>
         * and <code>constant</code> is: The <code>constant</code> value is
         * assigned only at the beginning and never changed then - like the
         * {@link Property#mutable() non-mutable} property. On the other
         * hand, a <code>readOnly</code> property can change its value,
         * but not via a setter - just like {@link ComputedProperty}.
         * <p>
         * This method isn't synchronized. Synchronization is up to the
         * caller.
         *
         * @param name name of the property
         * @param index index of the property
         * @param readOnly is the property read only?
         * @param constant is the property assigned once and never changed again?
         * @since 1.3
         */
        protected final void registerProperty(
            String name, int index, boolean readOnly, boolean constant
        ) {
            SimpleList.ensureSize(properties, index + 1);
            assert properties.get(index) == null;
            byte t = (byte) ((readOnly ? 1 : 0) | (constant ? 2 : 0));
            properties.set(index, new PropertyInfo(name, t));
        }

        /** Registers function of given name at given index.
         *
         * @param name name of the function
         * @param index name of the type
         */
        protected final void registerFunction(String name, int index) {
            SimpleList.ensureSize(functions, index + 1);
            assert functions.get(index) == null;
            functions.set(index, name);
        }

        /** Creates new proto-object for given {@link Model} class bound to
         * provided context.
         *
         * @param obj instance of appropriate {@link Model} class
         * @param context the browser context
         * @return new proto-object that the generated class can use for
         *   communication with the infrastructure
         */
        public Proto createProto(Object obj, BrwsrCtx context) {
            return new Proto(obj, this, context);
        }

        //
        // Implemented by subclasses
        //

        /** Sets value of a {@link #registerProperty(java.lang.String, int, boolean) registered property}
         * to new value.
         *
         * @param model the instance of {@link Model model class}
         * @param index index of the property used during registration
         * @param value the value to set the property to
         */
        protected abstract void setValue(Model model, int index, Object value);

        /** Obtains and returns value of a
         * {@link #registerProperty(java.lang.String, int, boolean) registered property}.
         *
         * @param model the instance of {@link Model model class}
         * @param index index of the property used during registration
         * @return current value of the property
         */
        protected abstract Object getValue(Model model, int index);

        /** Invokes a {@link #registerFunction(java.lang.String, int)} registered function
         * on given object.
         *
         * @param model the instance of {@link Model model class}
         * @param index index of the property used during registration
         * @param data the currently selected object the function is about to operate on
         * @param event the event that triggered the event
         * @throws Exception the method can throw exception which is then logged
         */
        protected abstract void call(Model model, int index, Object data, Object event)
        throws Exception;

        /** Re-binds the model object to new browser context.
         *
         * @param model the instance of {@link Model model class}
         * @param ctx browser context to clone the object to
         * @return new instance of the model suitable for new context
         */
        protected abstract Model cloneTo(Model model, BrwsrCtx ctx);

        /** Reads raw JSON data and converts them to our model class.
         *
         * @param c the browser context to work in
         * @param json raw JSON data to get values from
         * @return new instance of model class filled by the data
         */
        protected abstract Model read(BrwsrCtx c, Object json);

        /** Called when a {@link #registerProperty(java.lang.String, int, boolean) registered property}
         * changes its value.
         *
         * @param model the object that has the property
         * @param index the index of the property during registration
         */
        protected abstract void onChange(Model model, int index);

        /** Finds out if there is an associated proto-object for given
         * object.
         *
         * @param object an object, presumably (but not necessarily) instance of Model class
         * @return associated proto-object or <code>null</code>
         */
        protected abstract Proto protoFor(Object object);

        /** Called to report results of asynchronous over-the-wire
         * communication. Result of calling {@link Proto#wsOpen(int, java.lang.String, java.lang.Object)}
         * or {@link Proto#loadJSON(int, java.lang.String, java.lang.String, java.lang.String, java.lang.Object, java.lang.Object...)}.
         *
         * @param model the instance of the model class
         * @param index index used during initiating the communication (via <code>loadJSON</code> or <code>wsOpen</code> calls)
         * @param type type of the message: 0 - onOpen, 1 - onMessage, 2 - onError, 3 - onClose -
         *   not all messages are applicable to all communication protocols (JSON has only 1 and 2).
         * @param data <code>null</code> or string, number or a {@link Model} class
         *   obtained to the server as a response
         */
        protected void onMessage(Model model, int index, int type, Object data) {
            onMessage(model, index, type, data, new Object[0]);
        }

        /** Called to report results of asynchronous over-the-wire
         * communication. Result of calling {@link Proto#wsOpen(int, java.lang.String, java.lang.Object)}
         * or {@link Proto#loadJSON(int, java.lang.String, java.lang.String, java.lang.String, java.lang.Object, java.lang.Object...)}.
         *
         * @param model the instance of the model class
         * @param index index used during initiating the communication (via <code>loadJSON</code> or <code>wsOpen</code> calls)
         * @param type type of the message: 0 - onOpen, 1 - onMessage, 2 - onError, 3 - onClose -
         *   not all messages are applicable to all communication protocols (JSON has only 1 and 2).
         * @param data <code>null</code> or string, number or a {@link Model} class
         *   obtained to the server as a response
         * @param params extra parameters as passed for example to
         *   {@link Proto#loadJSON(int, java.lang.String, java.lang.String, java.lang.String, java.lang.Object, java.lang.Object...)}
         *   method
         * @since 0.8.1
         */
        protected void onMessage(Model model, int index, int type, Object data, Object[] params) {
            onMessage(model, index, type, data);
        }

        //
        // Various support methods the generated classes use
        //

        /** Converts and array of raw JSON objects into an array of typed
         * Java {@link Model} classes.
         *
         * @param <T> the type of the destination array
         * @param context browser context to use
         * @param src array of raw JSON objects
         * @param destType type of the individual array elements
         * @param dest array to be filled with read type instances
         */
        public <T> void copyJSON(BrwsrCtx context, Object[] src, Class<T> destType, T[] dest) {
            for (int i = 0; i < src.length && i < dest.length; i++) {
                dest[i] = org.netbeans.html.json.impl.JSON.read(context, destType, src[i]);
            }
        }

        /** Compares two objects that can be converted to integers.
         * @param a first value
         * @param b second value
         * @return true if they are the same
         */
        public final boolean isSame(int a, int b) {
            return a == b;
        }

        /** Compares two objects that can be converted to (floating point)
         * numbers.
         * @param a first value
         * @param b second value
         * @return  true if they are the same
         */
        public final boolean isSame(double a, double b) {
            return a == b;
        }

        /** Compares two objects for being the same - e.g. either <code>==</code>
         * or <code>equals</code>.
         * @param a first value
         * @param b second value
         * @return true if they are equals
         */
        public final boolean isSame(Object a, Object b) {
            if (a == b) {
                return true;
            }
            if (a == null || b == null) {
                return false;
            }
            return a.equals(b);
        }

        /** Cumulative hash function. Adds hashcode of the object to the
         * previous value.
         * @param o the object (or <code>null</code>)
         * @param h the previous value of the hash
         * @return new hash - the old one xor the object's one
         */
        public final int hashPlus(Object o, int h) {
            return o == null ? h : h ^ o.hashCode();
        }

        /** Converts an object to its JSON value.
         *
         * @param obj the object to convert
         * @return JSON representation of the object
         */
        public final String toJSON(Object obj) {
            return JSON.toJSON(obj);
        }

        /** Converts the value to string.
         *
         * @param val the value
         * @return the converted value
         */
        public final String stringValue(Object val) {
            return JSON.stringValue(val);
        }

        /** Converts the value to number.
         *
         * @param val the value
         * @return the converted value
         */
        public final Number numberValue(Object val) {
            return JSON.numberValue(val);
        }

        /** Converts the value to character.
         *
         * @param val the value
         * @return the converted value
         */
        public final Character charValue(Object val) {
            return JSON.charValue(val);
        }

        /** Converts the value to boolean.
         *
         * @param val the value
         * @return the converted value
         */
        public final Boolean boolValue(Object val) {
            return JSON.boolValue(val);
        }

        /** Extracts value of specific type from given object.
         *
         * @param <T> the type of object one is interested in
         * @param type the type
         * @param val the object to convert to type
         * @return the converted value
         */
        public final <T> T extractValue(Class<T> type, Object val) {
            if (Number.class.isAssignableFrom(type)) {
                val = numberValue(val);
            }
            if (Boolean.class == type) {
                val = boolValue(val);
            }
            if (String.class == type) {
                val = stringValue(val);
            }
            if (Character.class == type) {
                val = charValue(val);
            }
            if (Integer.class == type) {
                val = val instanceof Number ? ((Number) val).intValue() : 0;
            }
            if (Long.class == type) {
                val = val instanceof Number ? ((Number) val).longValue() : 0;
            }
            if (Short.class == type) {
                val = val instanceof Number ? ((Number) val).shortValue() : 0;
            }
            if (Byte.class == type) {
                val = val instanceof Number ? ((Number) val).byteValue() : 0;
            }
            if (Double.class == type) {
                val = val instanceof Number ? ((Number) val).doubleValue() : Double.NaN;
            }
            if (Float.class == type) {
                val = val instanceof Number ? ((Number) val).floatValue() : Float.NaN;
            }
            if (type.isEnum() && val instanceof String) {
                val = Enum.valueOf(type.asSubclass(Enum.class), (String)val);
            }
            return type.cast(val);
        }

        /** Special dealing with array &amp; {@link List} values. This method
         * takes the provided collection, empties it and fills it again
         * with values extracted from <code>value</code> (which is supposed
         * to be an array).
         *
         * @param <T> the type of list elements
         * @param arr collection to fill with elements in value
         * @param type the type of elements in the collection
         * @param value array of elements to put into the collecition. If
         *   value is not an array it is wrapped into array with only element
         * @since 1.0
         */
        public final <T> void replaceValue(Collection<? super T> arr, Class<T> type, Object value) {
            List<T> tmp = Models.asList();
            if (value instanceof Object[]) {
                for (Object e : (Object[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof byte[]) {
                for (Object e : (byte[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof short[]) {
                for (Object e : (short[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof int[]) {
                for (Object e : (int[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof char[]) {
                for (Object e : (char[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof long[]) {
                for (Object e : (long[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof float[]) {
                for (Object e : (float[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof double[]) {
                for (Object e : (double[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else if (value instanceof boolean[]) {
                for (Object e : (boolean[]) value) {
                    tmp.add(extractValue(type, e));
                }
            } else {
                tmp.add(extractValue(type, value));
            }
            if (arr instanceof JSONList) {
                JSONList jsList = (JSONList) arr;
                jsList.fastReplace(tmp);
            } else {
                arr.clear();
                arr.addAll(tmp);
            }
        }
    }
}
