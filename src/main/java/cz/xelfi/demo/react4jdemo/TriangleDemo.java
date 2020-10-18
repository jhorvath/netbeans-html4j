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
package cz.xelfi.demo.react4jdemo;

import net.java.html.js.JavaScriptBody;
import net.java.html.json.Model;
import net.java.html.json.OnReceive;
import net.java.html.json.Property;
import net.java.html.react.React;
import net.java.html.react.RegisterComponent;
import net.java.html.react.Render;

@Model(className = "TriangleModel", builder = "with", properties = {
        @Property(name = "a", type = int.class),
        @Property(name = "b", type = int.class),
        @Property(name = "c", type = int.class),})
public class TriangleDemo {

    @JavaScriptBody(args = {"event"}, body = "event.preventDefault()")
    private static native void preventDefault(Object event);

    @JavaScriptBody(args = {"form", "name"}, body = "return form.current.elements[name].value")
    private static native String getValue(Object form, String name);
    
    @OnReceive(url = "http://localhost:8080/", method = "POST", data = TriangleModel.class, onError = "postTriangleError")
    static void postTriangle(TriangleModel model, String reply) {
        System.out.println(reply);
    }
    
    static void postTriangleError(TriangleModel model, Throwable ex) {
        System.out.println(ex.getMessage());
    }

    @RegisterComponent(name = "TriangleDemoForm")
    static abstract class Form extends React.Component<TriangleModel> {

        Object form = React.createRef();
        TriangleModel tm;

        Form(React.Props props) {
            super(props);
            tm = props.as(TriangleModel.class);
        }

        

        private void updateFormValues(Object event) {
            preventDefault(event);

            Integer a = Integer.parseInt(getValue(form, "a"));
            Integer b = Integer.parseInt(getValue(form, "b"));
            Integer c = Integer.parseInt(getValue(form, "c"));

            TriangleModel t = new TriangleModel();
            t.withA(a).withB(b).withC(c);
            tm.postTriangle(t);
        }

        @Render(
                "<div className='triangleForm'>"
                + "   <form ref=\"{form}\" onSubmit=\"{onSubmit}\">"
                + "       <table>"
                + "           <tbody>"
                + "               <tr>"
                + "                   <td><b>Add new triangle:</b></td>"
                + "                   <td></td>"
                + "                   <td>a</td><td><input type=\"text\" name=\"a\" size=\"5\"/></td>"
                + "                   <td>b</td><td><input type=\"text\" name=\"b\" size=\"5\"/></td>"
                + "                   <td>c</td><td><input type=\"text\" name=\"c\" size=\"5\"/></td>"
                + "               </tr>"
                + "           </tbody>"
                + "       </table>"
                + "       <div className=\"button-line\">\n"
                + "           <button className=\"small-btn\" type=\"submit\" >apply</button>\n"
                + "       </div>"
                + "   </form>"
                + "</div>"
        )
        protected abstract React.Element renderForm(Object form, FormChange onSubmit);

        @Override
        protected React.Element render() {
            return renderForm(form, this::updateFormValues);
        }
    }

    public static void onPageLoad() {
        React.register("Form", TriangleDemoForm::new);
//        React.render("Form", "root");
    }

    interface FormChange {
        public void onSubmit(Object event);
    }
}
