import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../interfaces/employee';
import { Router } from '@angular/router';
import {
  EMPLOYEE,
  EMPLOYEES,
  EMPLOYEE_EDIT,
  EMPLOYEE_FORM_STRUCTURE,
} from '../../../constants';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  EMPLOYEE = EMPLOYEE;
  EMPLOYEES = EMPLOYEES;
  EMPLOYEE_FORM_STRUCTURE = EMPLOYEE_FORM_STRUCTURE;

  constructor(private EmployeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.EmployeeService.getAll().subscribe((employees) => {
      this.employees = employees;
    });
  }

  editEmployee(employeeId: string) {
    this.router.navigate([EMPLOYEE_EDIT, employeeId]); // Navigate to the edit page
  }

  deleteEmployee = (employeeId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.EmployeeService.delete(employeeId).subscribe(() => {
        this.EmployeeService.getAll().subscribe((u) => {
          this.employees = u;
        });
      });
    }
  };
}
