import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

import { EmployeeCreateComponent } from './employee-create.component';

describe('EmployeeCreateComponent', () => {
  let component: EmployeeCreateComponent;
  let fixture: ComponentFixture<EmployeeCreateComponent>;
  let restApi: RestApiService;

  const mockRouter = {navigate:jasmine.createSpy("navigate")};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreateComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: Router, useValue:mockRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCreateComponent);
    component = fixture.componentInstance;
    restApi = TestBed.inject(RestApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addEmployee', () => {
    spyOn(restApi,"createEmployee").and.returnValue();
    component.addEmployee();
    expect(component).toBeTruthy();
  });

});
