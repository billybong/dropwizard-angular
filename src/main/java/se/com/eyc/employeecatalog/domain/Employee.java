package se.com.eyc.employeecatalog.domain;

import lombok.Data;

@Data
public class Employee {

    private long id;
    private String name;
    private int yearsWorked;
    private String skill;

    public Employee() {
        //JSON-provider
    }

    public Employee(Employee that){
        this.id = that.getId();
        this.name = that.getName();
        this.yearsWorked = that.getYearsWorked();
        this.skill = that.skill;
    }

    public Employee(long id, String name, int yearsWorked, String skill) {
        this.id = id;
        this.name = name;
        this.yearsWorked = yearsWorked;
        this.skill = skill;
    }
}