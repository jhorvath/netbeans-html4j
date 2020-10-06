package cz.xelfi.demo.react4jdemo;

import net.java.html.react.React;
import net.java.html.react.RegisterComponent;
import net.java.html.react.Render;

public class TriangleDemo {

    @RegisterComponent(name = "TriangleDemoForm")
    static abstract class Form extends React.Component {
        Form(React.Props props) {
            super(props);
        }

        @Render(
                "<div className='triangleForm'>" +
                " TEST " +
                "</div>"
        )
        @Override
        protected abstract React.Element render();
    }
    
    public static void onPageLoad() {
        React.register("Form", TriangleDemoForm::new);
    }
    
}
