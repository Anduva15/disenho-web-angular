import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../interfaces/account';
import { BaseService } from './BaseService';
import { ACCOUNT, ACCOUNTS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService<Account> {
  constructor(http: HttpClient) {
    super(http, ACCOUNT, ACCOUNTS);
  }

}
