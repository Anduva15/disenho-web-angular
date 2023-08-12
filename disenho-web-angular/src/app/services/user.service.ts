import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { BaseService } from './BaseService';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http, 'user', 'users');
  }
}
