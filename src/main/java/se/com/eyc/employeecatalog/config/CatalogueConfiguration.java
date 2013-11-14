package se.com.eyc.employeecatalog.config;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.yammer.dropwizard.config.Configuration;
import org.hibernate.validator.constraints.NotEmpty;

public class CatalogueConfiguration extends Configuration{

    @NotEmpty
    @JsonProperty
    private String prefix;

    public String getPrefix() {
        return prefix;
    }
}