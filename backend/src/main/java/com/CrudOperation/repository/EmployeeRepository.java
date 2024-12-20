package com.CrudOperation.repository;

import com.CrudOperation.entity.EmployeeEntity;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class EmployeeRepository {

    private final JdbcTemplate dbCon;

    // Constructor injection with @Qualifier to specify the JdbcTemplate bean
    public EmployeeRepository(@Qualifier("dbCon") JdbcTemplate dbCon) {
        this.dbCon = dbCon;
    }

    // Method to find an employee by ID
    public Optional<EmployeeEntity> findById(Integer id) {
        String qry = "SELECT * FROM employee WHERE id = ?";
        try {
            EmployeeEntity emp = dbCon.queryForObject(
                qry, 
                new BeanPropertyRowMapper<>(EmployeeEntity.class), 
                id
            );
            return Optional.ofNullable(emp);
        } catch (Exception e) {
            // Log or handle exception
            return Optional.empty();
        }
    }
    
    public List<EmployeeEntity> findAll() {
        String qry = "SELECT * FROM employee";
        return dbCon.query(qry, new BeanPropertyRowMapper<>(EmployeeEntity.class));
    }


    // Method to save an employee
    public EmployeeEntity save(EmployeeEntity employee) {
        String qry = "INSERT INTO employee (firstname, lastname, gender, salary, jobtitle, email, phoneno) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?)";
        dbCon.update(qry, employee.getFirstName(), employee.getLastName(), employee.getGender(),
                     employee.getSalary(), employee.getJobTitle(), employee.getEmail(), employee.getPhoneNo());
        return employee;
    }

    public EmployeeEntity update(EmployeeEntity employee) {
        String updateQuery = """
            UPDATE employee SET 
                firstname = ?, lastname = ?, gender = ?, 
                salary = ?, jobtitle = ?, email = ?, phoneno = ?
            WHERE id = ?
        """;

        dbCon.update(updateQuery,
            employee.getFirstName(),
            employee.getLastName(),
            employee.getGender(),
            employee.getSalary(),
            employee.getJobTitle(),
            employee.getEmail(),
            employee.getPhoneNo(),
            employee.getId()
        );

        // Return the updated employee object
        return employee;
    }
    
    public void delete(Integer id) {
        String deleteQuery = "DELETE FROM employee WHERE id = ?";
        dbCon.update(deleteQuery, id);
    }
}
