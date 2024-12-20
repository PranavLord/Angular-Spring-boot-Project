import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  standalone:false,
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        console.log('Employees fetched successfully:', data);
      },
      (error) => {
        this.errorMessage = 'Error fetching employee data. Please try again later.';
        console.error('Error fetching employees:', error);
      }
    );
  }

  onUpdate(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/update', id]);
    } else {
      console.error('Invalid employee id');
    }
  }
  
}
