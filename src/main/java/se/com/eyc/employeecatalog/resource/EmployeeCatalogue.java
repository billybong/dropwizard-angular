package se.com.eyc.employeecatalog.resource;

import com.google.common.base.Function;
import com.google.common.collect.Lists;
import se.com.eyc.employeecatalog.domain.Employee;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

@Path("/employees")
@Produces(MediaType.APPLICATION_JSON)
public class EmployeeCatalogue {

    final private AtomicLong counter = new AtomicLong();
    final private String prefix;
    private final Map<Long, Employee> employees = new HashMap<Long, Employee>(){{
            put(counter.incrementAndGet(), new Employee(counter.get(), "Billy", 1 , "JVM"));
            put(counter.incrementAndGet(), new Employee(counter.get(), "Gustav", 10 , "SIR"));
    }};

    public EmployeeCatalogue(String prefix) {
        this.prefix = prefix;
    }

    @GET
    public List<Employee> allEmployees(){
        return Lists.transform(Lists.newArrayList(employees.values()), new Function<Employee, Employee>(){

            @Override
            public Employee apply(Employee in) {
                Employee out = new Employee(in);
                out.setName(prefix + " " + out.getName());
                return out;
            }
        });
    }

    @GET
    @Path("/{id}")
    public Response getEmployer(@PathParam("id") long id){
        Employee e = employees.get(id);

        if(e != null){
            return Response.ok(e).build();
        }else{
            return Response.status(Status.NOT_FOUND).build();
        }
    }

    @PUT
    @Path("/{id}")
    public void updateEmployer(@PathParam("id") long id, Employee updatedPerson){
        this.employees.remove(id);
        this.employees.put(id, updatedPerson);
    }

    @POST
    public Response addEmployer(@Context UriInfo uriInfo, Employee person){
        long id = counter.incrementAndGet();

        this.employees.put(id, person);
        URI newUri = uriInfo.getBaseUriBuilder().path(EmployeeCatalogue.class).path(String.valueOf(id)).build();

        return Response.created(newUri).build();
    }

}