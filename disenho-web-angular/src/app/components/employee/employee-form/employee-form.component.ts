import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { EMPLOYEES, EMPLOYEE_FORM_STRUCTURE } from 'src/app/constants';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../interfaces/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  isNew: boolean = true;
  formFields = EMPLOYEE_FORM_STRUCTURE;

  employee: Employee = {
    id: '',
    idCardNumber: '',
    name: '',
    fistName: '',
    lastName: '',
    phoneNumber1: '',
    phoneNumber2: '',
    restaurantId: '',
    positionId: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load employee data if editing an existing employee
        const employeeId = params['id'];
        this.employeeService.getOne(employeeId).subscribe((employee) => {
          this.employee = employee;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update employee data with form data
    this.employee = { ...this.employee, ...formData };

    if (this.isNew) {
      this.employeeService.create(omit(this.employee, ['id'])).subscribe(() => {
        // Redirect to user list after successful creation
        this.router.navigate([EMPLOYEES]);
      });
    } else {
      this.employeeService.update(this.employee.id, this.employee).subscribe(() => {
        // Redirect to employee list after successful update
        this.router.navigate([EMPLOYEES]);
      });
    }
  }
}
