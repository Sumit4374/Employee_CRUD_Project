package com.example.employee.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private long id;
    private String name;
    private String email;
    private String position;
    private String department;
    private int salary;
}