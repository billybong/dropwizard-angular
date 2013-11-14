package se.com.eyc.employeecatalog;

import com.yammer.dropwizard.Service;
import com.yammer.dropwizard.assets.AssetsBundle;
import com.yammer.dropwizard.config.Bootstrap;
import com.yammer.dropwizard.config.Environment;
import se.com.eyc.employeecatalog.config.CatalogueConfiguration;
import se.com.eyc.employeecatalog.healthcheck.EycHealthCheck;
import se.com.eyc.employeecatalog.resource.EmployeeCatalogue;

public class CatalogService extends Service<CatalogueConfiguration>{

    public static void main(String[] args) throws Exception{
        new CatalogService().run(args);
    }

    @Override
    public void initialize(Bootstrap<CatalogueConfiguration> bootstrap) {
        bootstrap.setName("CatalogService");
        bootstrap.addBundle(new AssetsBundle("/assets/", "/"));
    }

    @Override
    public void run(CatalogueConfiguration configuration, Environment environment) throws Exception {
        environment.addResource(new EmployeeCatalogue(configuration.getPrefix()));
        environment.addHealthCheck(new EycHealthCheck("employeeCatalog"));
    }
}