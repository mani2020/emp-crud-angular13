import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../shared/employee';
import { Observable, Subject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  userChanged = new Subject<Employee[]>();
  private users: Employee[] = [{
    "id": "2",
    "name": "Black Widowasdf",
    "email": "black-widow@mcu.com",
    "phone": 9798869898
  },
  {
    "name": "Mani",
    "email": "mani@gmail.com",
    "phone": 98798798788,
    "id": "5"
  }];

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch employees list
  getEmployees() {
    return this.users.slice();
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: any) {
    return this.users.filter(x=> x.id==id);
  }

  // HttpClient API post() method => Create employee
  createEmployee(newUser: any){
    const idArr = this.users.map(x=> parseInt(x.id));
    newUser.id = Math.max(...idArr)+1 || 0;
    this.users.push(newUser);
    this.userChanged.next(this.users.slice()); 
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id: any, updatedUser: any) {
    this.users.filter(x=> {
      if(x.id==id){
        x = updatedUser;
      }
    });
    this.userChanged.next(this.users.slice());
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: any) {
    const newUsers = this.users.filter(x=> x.id!=id);
    this.users = newUsers;
    this.userChanged.next(this.users.slice());
  }


}
