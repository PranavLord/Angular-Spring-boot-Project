package com.CrudOperation.controller;

import com.CrudOperation.entity.EmployeeEntity;
import com.CrudOperation.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Get Employee by ID
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeEntity> getEmployeeById(@PathVariable Integer id) {
        Optional<EmployeeEntity> employee = employeeService.getEmployeeById(id);
        return employee.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
 // Get All Employees
    @GetMapping
    public ResponseEntity<List<EmployeeEntity>> getAllEmployees() {
        List<EmployeeEntity> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }


    // Create or Update Employee
    @PostMapping("/createemployee")
    public ResponseEntity<EmployeeEntity> saveEmployee(@RequestBody EmployeeEntity employee) {
        EmployeeEntity savedEmployee = employeeService.saveEmployee(employee);
        return ResponseEntity.ok(savedEmployee);
    }
    
    //Update Employee details
    @PutMapping("/updateemployee/{id}")
    public ResponseEntity<EmployeeEntity> updateEmployee(
        @PathVariable Integer id, 
        @RequestBody EmployeeEntity employee
    ) {
        // Set the ID from the URL to the employee object
        employee.setId(id);

        EmployeeEntity updatedEmployee = employeeService.updateEmployee(employee);
        if (updatedEmployee == null) {
            // If the employee with the provided ID does not exist, return 404 Not Found
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedEmployee);
    }
    
    @DeleteMapping("/deleteemployee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Integer id) {
        boolean isDeleted = employeeService.deleteEmployee(id);
        if (isDeleted) {
            return ResponseEntity.ok("Employee record deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Employee record not found.");
        }
    }




    
}
