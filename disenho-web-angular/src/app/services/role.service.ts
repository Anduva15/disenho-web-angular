import { Injectable } from '@angular/core';
import { Role } from '../interfaces/role';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './BaseService';
import { ROLE, ROLES } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService<Role>{
  constructor(http: HttpClient) {
    super(http, ROLE, ROLES);
  }
}
