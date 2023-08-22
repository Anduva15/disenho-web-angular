import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../interfaces/employee';
import { EMPLOYEE_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  EMPLOYEE_FORM_STRUCTURE = EMPLOYEE_FORM_STRUCTURE;
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load employee data based on route parameter
        const employeeId = params['id'];
        this.employeeService.getOne(employeeId).subscribe((employee) => {
          this.employee = employee;
        });
      }
    });
  }
}
