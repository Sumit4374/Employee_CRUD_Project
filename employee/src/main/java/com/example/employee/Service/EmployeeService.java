package com.example.employee.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.employee.Entity.EmployeeEntity;
import com.example.employee.Repository.EmployeeRepo;


@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    public List<EmployeeEntity> findAll() {
        System.out.println(employeeRepo.findAll());
        return employeeRepo.findAll();
    }
    public EmployeeEntity save(EmployeeEntity employee) {
        return employeeRepo.save(employee);
    }
    public void deleteById(Long id) {
        employeeRepo.deleteById(id);
    }
    @NonNull
    public Optional<EmployeeEntity> findById(@NonNull Long id){
        return employeeRepo.findById(id);
    }
    public EmployeeEntity updateById(@NonNull Long id, @NonNull EmployeeEntity employeeEntity){
        employeeEntity.setId(id);
        return employeeRepo.save(employeeEntity);
    }
}
