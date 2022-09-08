import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../shared/employee';
import { RestApiService } from '../shared/rest-api.service';

import { EmployeeEditComponent } from './employee-edit.component';

describe('EmployeeEditComponent', () => {
  let component: EmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEditComponent>;
  let restApi: RestApiService;
  let aRoute = {snapshot:{params:{id:"2"}}};
  const mockRouter = {navigate:jasmine.createSpy("navigate")};
  let remainingUsers: Employee[] = [
    {
      "id": "2",
      "name": "Black Widowasdf",
      "email": "black-widow@mcu.com",
      "phone": 9798869898
    }];  
    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: Router, useValue:mockRouter},{provide: ActivatedRoute, useValue:aRoute} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditComponent);
    component = fixture.componentInstance;
    restApi = TestBed.inject(RestApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    spyOn(restApi,"getEmployee").withArgs("2").and.returnValue(remainingUsers);
    component.ngOnInit();
    expect(component.employeeData).toEqual(remainingUsers[0]);
  });

  it('should call updateEmployee', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    component.updateEmployee();
    expect(component.employeeData).toEqual(remainingUsers[0]);
  });

});
