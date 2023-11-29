import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = 'http://localhost:5000/employee';
  // private baseUrl = 'https://employeedb-zj5g.onrender.com/employee';

  constructor(private http: HttpClient) { }

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, employeeData, this.getHeaders());
  }

  getAllEmployees(currentPage: number, itemsPerPage: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getall?page=${currentPage}&pageSize=${itemsPerPage}`, this.getHeaders());
  }

  getAllWithoutPaginationEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallWithoutpPAgination`, this.getHeaders());
  }

  getEmployeeByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getone/${email}`, this.getHeaders());
  }

  updateEmployeeByEmail(email: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${email}`, updatedData, this.getHeaders());
  }

  deleteEmployeeByEmail(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${email}`, this.getHeaders());
  }

  private getHeaders() {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }
}