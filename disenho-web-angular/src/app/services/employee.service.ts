import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee';
import { BaseService } from './BaseService';
import { EMPLOYEE, EMPLOYEES } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService<Employee>{
  constructor(http: HttpClient) {
    super(http, EMPLOYEE, EMPLOYEES);
  }
}
