import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../interfaces/report';
import { BaseService } from './BaseService';
import { REPORT, REPORTS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseService<Report>{
  constructor(http: HttpClient) {
    super(http, REPORT, REPORTS);
  }

}
