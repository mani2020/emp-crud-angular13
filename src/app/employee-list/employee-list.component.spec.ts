import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeListComponent } from './employee-list.component';
import { RestApiService } from '../shared/rest-api.service';
import { Employee } from '../shared/employee';


describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let restApi: RestApiService;
  let users: Employee[] = [{
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
  let remainingUsers: Employee[] = [
  {
    "id": "2",
    "name": "Black Widowasdf",
    "email": "black-widow@mcu.com",
    "phone": 9798869898
  }];  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    restApi = TestBed.inject(RestApiService);
    
    //spyOn(restApi,"deleteEmployee").withArgs("2").and.returnValue();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadEmployees', () => {
    spyOn(restApi,"getEmployees").and.returnValue(users);
    component.loadEmployees();
    expect(component.Employee).toEqual(users);
  });
  
  it('should call deleteEmployee', () => {
    spyOn(restApi,"getEmployees").and.returnValue(remainingUsers);
    component.deleteEmployee("5");
    expect(component.Employee).toEqual(remainingUsers);
  });  

});
