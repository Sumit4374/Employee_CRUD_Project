package com.example.employee.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Employee_DB")
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String position;
    private String department;
    private int salary;
    
    // Default constructor
    public EmployeeEntity() {}
    
    // Constructor without id (for creation)
    public EmployeeEntity(String name, String email, int salary) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }
    
    // Getters
    public long getId() {
       return id;
    }
    public String getName() {
        return name;
    }
    public String getEmail() {
        return email;
    }
    public int getSalary() {
        return salary;
    }
    public String getPosition(){
        return position;
    }
    public String getDepartment(){
        return department;
    }
    
    // Setters (REQUIRED for JSON deserialization)
    public void setId(long id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(int salary) {
        this.salary = salary;
    }
    public void setPosition( String position){
        this.position = position;
    }
    public void setDepartment(String department){
        this.department = department;
    }
}
