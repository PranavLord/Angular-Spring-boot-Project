import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  standalone: false,
  
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})

export class DeleteComponent implements OnInit {
  employees: Employee[] = []; // Store the list of employees
  errorMessage: string = ''; // Store error messages, if any

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees(); // Fetch employees on component initialization
  }

  fetchEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        console.log('Employees fetched:', this.employees);
      },
      (error) => {
        this.errorMessage = 'Error fetching employees. Please try again later.';
        console.error('Error fetching employees:', error);
      }
    );
  }

  deleteEmployee(id: number | undefined): void {
    if (id === undefined) {
      this.errorMessage = 'Invalid employee ID.';
      return;
    }
  
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        console.log('Employee deleted:', response);
        this.errorMessage = ''; // Clear any error messages
        this.fetchEmployees(); // Refresh the employee list after successful deletion
      },
      error: (err: HttpErrorResponse) => {
        // Handle error status appropriately
        this.errorMessage =
          err.status === 404
            ? 'Employee not found. It may have already been deleted.'
            : `Error deleting employee: ${err.statusText}. Please try again later.`;
        console.error('Error deleting employee:', err);
      },
    });
  }
}