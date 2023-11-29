import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let employeeService: jasmine.SpyObj<EmployeeService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('EmployeeService', ['getAllEmployees', 'createEmployee', 'updateEmployeeByEmail', 'deleteEmployeeByEmail', 'getAllWithoutPaginationEmployees']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
      providers: [{ provide: EmployeeService, useValue: spy }]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService) as jasmine.SpyObj<EmployeeService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employees on ngOnInit', () => {
    const mockEmployees = [{ "_id": { "$oid": "64efaf2fdd26260595b82717" }, "firstName": "Liam", "lastName": "Davis", "email": "liam.davis@example.com", "position": "Product Manager", "department": "Product Management", "experience": { "$numberInt": "8" }, "joiningDate": "2021-12-12", "salary": { "$numberInt": "85000" }, "createdDate": "2023-08-31T02:28:20.593+05:30", "employeeId": "EMP-1b2c" }];
    employeeService.getAllEmployees.and.returnValue(of(mockEmployees));

    component.ngOnInit();

    expect(employeeService.getAllEmployees).toHaveBeenCalled();
    expect(component.employees).toEqual(mockEmployees);
  });

  // it('should create employee', () => {
  //   const mockEmployee = { /* sample employee data */ };
  //   employeeService.createEmployee.and.returnValue(of(mockEmployee));

  //   component.createEmployee();

  //   expect(employeeService.createEmployee).toHaveBeenCalledWith(component.newEmployee);
  //   expect(component.newEmployee).toEqual({});
  //   // Add additional expectations as needed
  // });

  // it('should update employee', () => {
  //   const mockEmployeeForm = { /* sample form data */ };
  //   const mockEmail = 'test@example.com';
  //   employeeService.updateEmployeeByEmail.and.returnValue(of({}));

  //   component.updateEmployee(mockEmail, mockEmployeeForm);

  //   expect(employeeService.updateEmployeeByEmail).toHaveBeenCalledWith(mockEmail, mockEmployeeForm);
  //   // Add additional expectations as needed
  // });

  // it('should delete employee', () => {
  //   const mockEmail = 'test@example.com';
  //   spyOn(window, 'confirm').and.returnValue(true);
  //   employeeService.deleteEmployeeByEmail.and.returnValue(of({}));

  //   component.deleteEmployee(mockEmail);

  //   expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this employee?');
  //   expect(employeeService.deleteEmployeeByEmail).toHaveBeenCalledWith(mockEmail);
  //   // Add additional expectations as needed
  // });
});












// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [RouterTestingModule],
//     declarations: [AppComponent]
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'src'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('src');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('src app is running!');
//   });
// });



