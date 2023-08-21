import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cashier } from '../interfaces/cashier';
import { BaseService } from './BaseService';
import { CASHIER, CASHIERS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class CashierService extends BaseService<Cashier>{

  constructor(http: HttpClient) {
    super(http, CASHIER, CASHIERS);
  }
}
