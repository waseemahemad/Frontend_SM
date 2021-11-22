import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8081/rest/api/school';
  private baseupdateUrl = 'http://localhost:8081/rest/api/school/update';

  constructor(private http: HttpClient) { }
  public getUsers(){
  let url ="http://localhost:8081/allUsers";
    return this.http.get(url);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('basicAuth');
    
  }
  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseupdateUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }}
