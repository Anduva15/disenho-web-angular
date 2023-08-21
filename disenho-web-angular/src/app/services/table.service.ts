import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../interfaces/table';
import { BaseService } from './BaseService';
import { TABLE,TABLES} from '../constants';
@Injectable({
  providedIn: 'root'
})
export class TABLEService extends BaseService<Table>{
  constructor(http: HttpClient) {
    super(http, TABLE, TABLES);
  }
}
