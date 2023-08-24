import { Injectable } from '@angular/core';
import { Bill } from '../interfaces/bill';
import { BaseService } from './BaseService';
import { HttpClient } from '@angular/common/http';
import { BILL, BILLS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseService<Bill>{

  constructor(http: HttpClient) {
    super(http, BILL, BILLS);
  }
}
