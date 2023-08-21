import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../interfaces/client';
import { BaseService } from './BaseService';
import { CLIENT, CLIENTS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService<Client>{

  constructor(http: HttpClient) {
    super(http, CLIENT, CLIENTS);
  }
}
