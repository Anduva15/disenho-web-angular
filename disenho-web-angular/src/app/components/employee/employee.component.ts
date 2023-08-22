import { Component } from '@angular/core';
import { EMPLOYEES, EMPLOYEE_ADD } from '../../constants';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  EMPLOYEES = EMPLOYEES;
  EMPLOYEE_ADD = EMPLOYEE_ADD;
  constructor() {}
}
