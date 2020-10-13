package cz.xelfi.micro.shared;

import io.micronaut.context.annotation.Factory;
import io.micronaut.validation.validator.constraints.ConstraintValidator;

import javax.inject.Singleton;

@Factory
public class MyValidatorFactory {

    @Singleton
    ConstraintValidator<ValidTriangle, Triangle> triangleValidator() {
        return (t, annotationMetadata, context) ->
                t == null || (t.a + t.b > t.c && t.a + t.c > t.b && t.b + t.c > t.a);
    }
}
