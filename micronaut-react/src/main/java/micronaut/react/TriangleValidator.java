/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package micronaut.react;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 *
 * @author honza
 */
class TriangleValidator implements ConstraintValidator<ValidTriangle, Triangle> {
    
    @Override
    public void initialize(ValidTriangle constraintAnnotation)
    {
    }

    @Override
    public boolean isValid(Triangle t, ConstraintValidatorContext context)
    {
        return t == null || (t.a + t.b > t.c && t.a + t.c > t.b && t.b + t.c > t.a);
    }
    
}
