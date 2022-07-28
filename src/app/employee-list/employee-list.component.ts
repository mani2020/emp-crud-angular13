import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})

export class EmployeeListComponent implements OnInit {
  Employee: any = [];

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  // Get employees list
  loadEmployees() {
    this.Employee = this.restApi.getEmployees();
  }

  // Delete employee
  deleteEmployee(id: any) {
    this.restApi.deleteEmployee(id);
    this.loadEmployees();
  }
}
