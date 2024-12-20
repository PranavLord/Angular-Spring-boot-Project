package com.CrudOperation.service;

import com.CrudOperation.entity.EmployeeEntity;
import com.CrudOperation.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Optional<EmployeeEntity> getEmployeeById(Integer id) {
        return employeeRepository.findById(id);
    }

    public EmployeeEntity saveEmployee(EmployeeEntity employee) {
        return employeeRepository.save(employee);
    }
    
    public List<EmployeeEntity> getAllEmployees() {
        return employeeRepository.findAll();
    }



    public EmployeeEntity updateEmployee(EmployeeEntity employee) {
        Optional<EmployeeEntity> existingEmployee = employeeRepository.findById(employee.getId());
        if (existingEmployee.isPresent()) {
            return employeeRepository.update(employee);
        }
        return null;
    }
    
    public boolean deleteEmployee(Integer id) {
        Optional<EmployeeEntity> existingEmployee = employeeRepository.findById(id);
        if (existingEmployee.isPresent()) {
            employeeRepository.delete(id);
            return true; // Deletion successful
        }
        return false; // Employee not found
    }

    

}
