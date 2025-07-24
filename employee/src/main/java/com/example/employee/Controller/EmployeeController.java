package com.example.employee.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.Entity.EmployeeEntity;
import com.example.employee.Service.EmployeeService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api/employees")  
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/getAll")
    public List<EmployeeEntity> getAllEmployees() {
        return employeeService.findAll();
    }

    @PostMapping("/create")
    public EmployeeEntity postMethodName(@RequestBody EmployeeEntity employee) {
        return employeeService.save(employee);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteMethod(@PathVariable Long id){
        try {
            employeeService.deleteById(id);
            return true;
        } catch (Exception e) {
           return false;
        }
    }

    @GetMapping("/findId/{id}")
    public Optional<EmployeeEntity> getAllEmployee(@PathVariable Long id) {
        return employeeService.findById(id);
    }
    
    @PutMapping("/edit/{id}")
    public boolean putMethodName(@PathVariable Long id, @RequestBody EmployeeEntity employeeEntity) {
        try {
            employeeService.updateById(id, employeeEntity);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
}
