package micronaut.react;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Consumes;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.validation.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Controller("/")
public class TriangleControler {
    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(TriangleControler.class.getName());

    private Set<Triangle> triangles;

    @Inject
    Validator validator;

    @PostConstruct
    public void init() {
        triangles = new HashSet<>();
        triangles.add(new Triangle(1, 2, 3));
    }

    @Get
    public Collection<Triangle> triangles() {
        return triangles;
    }

    @Post
    @Consumes(MediaType.APPLICATION_JSON)
    public void addTriangle(@Valid Triangle triangle) {
        triangles.add(triangle);
    }

}
