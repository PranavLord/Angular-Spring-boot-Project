import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  standalone: true,  // Mark the component as standalone
  imports: [FormsModule],  // Import FormsModule here for ngModel
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent {
  employee = {
    firstName: '',
    lastName: '',
    gender: 'Male',
    salary: 0,
    jobTitle:'',
    email: '',
    phoneNo: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router, private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:9000/CRUD/employee/createemployee', this.employee)
      .subscribe(
        response => {
          console.log('Employee created successfully:', response);
          this.router.navigate(['/create']);  // Navigate to the 'read' page after successful creation
        },
        error => {
          console.error('Error creating employee:', error);
        }
      );
  }
}
