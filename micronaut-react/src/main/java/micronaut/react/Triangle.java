/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package micronaut.react;

import io.micronaut.core.annotation.Introspected;
import org.slf4j.LoggerFactory;

import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.util.StringJoiner;

/**
 *
 * @author honza
 */
@ValidTriangle
@Introspected
public class Triangle {

    @Positive(message = "Side must be greater than zero")
    Integer a;

    @Positive(message = "Side must be greater than zero")
    Integer b;

    @Positive(message = "Hypotenuse must be greater than zero")
    Integer c;

    public Triangle() {
    }

    
    public Triangle(@Positive(message = "Side must be greater than zero") Integer a,
                    @Positive(message = "Side must be greater than zero") Integer b,
                    @Positive(message = "Hypotenuse must be greater than zero") Integer c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public Integer getA() {
        return a;
    }

    public Integer getB() {
        return b;
    }

    public Integer getC() {
        return c;
    }

    @Override
    public String toString() {
        return "Triangle{" + "a=" + a + ", b=" + b + ", c=" + c + '}';
    }
}
