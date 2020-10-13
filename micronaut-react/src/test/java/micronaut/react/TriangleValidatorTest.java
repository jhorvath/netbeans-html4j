package micronaut.react;

import cz.xelfi.micro.shared.TriangleValidator;
import cz.xelfi.micro.shared.Triangle;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TriangleValidatorTest {

    @Test
    public void testTriangle() {
        TriangleValidator tv = new TriangleValidator();

        Triangle t = new Triangle(1, 2, 2);
        assertTrue(tv.isValid(t, null));

        t = new Triangle(1, 2, 20);
        assertFalse(tv.isValid(t, null));
    }

}