import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {
  
  employeeData: any = {};
  id:number = 0;
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.id  = this.actRoute.snapshot.params['id'];
    this.employeeData = this.restApi.getEmployee(this.id);
    if(Array.isArray(this.employeeData)){
      this.employeeData = this.employeeData[0];
    }
  }

  // Update employee data
  updateEmployee() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi
        .updateEmployee(this.id, this.employeeData);        
          this.router.navigate(['/employees-list']);
    }
  }
}
