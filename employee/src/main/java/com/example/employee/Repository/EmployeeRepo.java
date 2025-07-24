package com.example.employee.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employee.Entity.EmployeeEntity;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeEntity, Long> {
    // @NonNull List<EmployeeEntity> findAll();
    // void deleteById(@NonNull Long id);
    // void setId(@NonNull Long id);
    // EmployeeEntity save(Employee employee);
    // @NonNull Optional<EmployeeEntity> findById(@NonNull Long id);
}