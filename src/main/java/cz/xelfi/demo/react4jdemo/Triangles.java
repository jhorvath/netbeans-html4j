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

import java.util.List;
import java.util.function.Consumer;
import net.java.html.json.Model;
import net.java.html.json.OnReceive;
import net.java.html.json.Property;
import net.java.html.react.React;
import net.java.html.react.RegisterComponent;
import net.java.html.react.Render;

@Model(className = "TriangleListModel", builder = "with", properties = {
    @Property(name = "triangles", type = TriangleModel.class, array = true)
})
public class Triangles {
    public Triangles() {
    }
    
    @OnReceive(url = "http://localhost:8080/", onError = "getTrianglesError")
    static void loadTriangles(TriangleListModel model, List<TriangleModel> reply, Consumer<TriangleListModel> set) {
        set.accept(model.withTriangles(reply.toArray(new TriangleModel[reply.size()])));
    }
    
    static void getTrianglesError(TriangleListModel model, Throwable tx) {
        System.out.println(tx.getMessage());
    }

    @RegisterComponent(name = "TriangleListComponent")
    static abstract class TriangleList extends React.Component<TriangleListModel> {

        public TriangleList(React.Props props) {
            super(props);
            TriangleListModel tlm = new TriangleListModel();
            setState(tlm);
            tlm.loadTriangles(this::setState);
        }
        
        @Render(
                "      <li key=\"{key}\"> {a} {b} {c} </li>"
        )
        protected abstract React.Element renderTriangle(int key, int a, int b, int c);
        
        protected React.Element renderTriangles(TriangleListModel list) {
            React.Element[] arr = new React.Element[list.getTriangles().size()];
            int count = 0;
            for (TriangleModel tm : list.getTriangles()) {
                arr[count] = renderTriangle(count, tm.getA(), tm.getB(), tm.getC());
                count++;
            }
            return React.createElement("div", null, arr);
        }

        @Render(
                  "<div className='triangleForm'>"
                + "  Triangles: "
                + "  <ul>"
                + "     {this.renderTriangles(triangles)}"
                + "  </ul>"
                + "  <Form/>"
                + "</div>"
        )
        protected abstract React.Element renderList(TriangleListModel triangles);

        @Override
        protected React.Element render() {
            return renderList(state());
        }
        
    }

    public static void onPageLoad() {
        React.register("TriangleList", TriangleListComponent::new);
        React.render("TriangleList", "root");
    }

}
