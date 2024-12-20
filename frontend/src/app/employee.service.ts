import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Define the employee model interface (optional but recommended)
export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  gender: string;
  salary: number;  
  jobTitle: string;
  email: string;
  phoneNo: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:9000/CRUD/employee';  // Backend URL

  constructor(private http: HttpClient) {}

  // Create an employee
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/createemployee`, employee);
  }

  // Get employee by ID
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // Get all employees (optional)
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}`);
  }

  // Update an employee
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/updateemployee/${id}`, employee);
  }

  // Delete an employee
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteemployee/${id}`);
  }
}
