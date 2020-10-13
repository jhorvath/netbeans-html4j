/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cz.xelfi.micro.shared;

import io.micronaut.context.ApplicationContext;
import io.micronaut.validation.validator.DefaultValidator;
import java.util.Set;
import javax.validation.ConstraintViolation;
import net.java.html.junit.BrowserRunner;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(BrowserRunner.class)
public class TriangleValidatorTest {

    public TriangleValidatorTest() {
    }

    @Test
    public void testInvalidDimensions() {
        ApplicationContext ctx = ApplicationContext.build().deduceEnvironment(false).build().start();
        DefaultValidator v = ctx.getBean(DefaultValidator.class);
        Triangle t = new Triangle(1, 2, 3);
        Set<ConstraintViolation<Triangle>> constraints = v.validate(t);
        assertEquals("expecting one element: " + constraints, 1, constraints.size());
        assertEquals("This triangle dimensions are not valid", constraints.iterator().next().getMessage().trim());
    }

}
