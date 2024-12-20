import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, Employee } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  encapsulation: ViewEncapsulation.None  
})
export class UpdateComponent implements OnInit {
  employee: Employee = {
    firstName: '',
    lastName: '',
    gender: '',
    salary: 0,
    jobTitle: '',
    email: '',
    phoneNo: ''
  };
  errorMessage: string = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute, // To get the route parameters
    private router: Router
  ) {}

  ngOnInit(): void {
    const employeeId = +this.route.snapshot.paramMap.get('id')!; // Get the 'id' from the route
    if (employeeId) {
      this.fetchEmployee(employeeId);
    } else {
      this.errorMessage = 'Employee ID is missing.';
    }
  }

  fetchEmployee(id: number): void {
    this.employeeService.getEmployee(id).subscribe(
      (data: Employee) => {
        this.employee = data;
        console.log('Employee fetched for update:', data);
      },
      (error) => {
        this.errorMessage = 'Error fetching employee data. Please try again later.';
        console.error('Error fetching employee:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(
        (updatedEmployee) => {
          console.log('Employee updated successfully:', updatedEmployee);
          this.router.navigate(['/read']);
        },
        (error) => {
          console.error('Error updating employee:', error);
          this.errorMessage = 'Error updating employee. Please try again later.';
        }
      );
    } else {
      this.errorMessage = 'Employee ID is missing, cannot update.';
    }
  }
}
