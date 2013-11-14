package se.com.eyc.employeecatalog.healthcheck;

import com.yammer.metrics.core.HealthCheck;

public class EycHealthCheck extends HealthCheck {

    public EycHealthCheck(String name) {
        super(name);
    }

    @Override
    protected Result check() throws Exception {
        return Result.healthy("We're still up!");
    }

}