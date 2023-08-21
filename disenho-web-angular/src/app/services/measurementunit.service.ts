import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Measurementunit } from '../interfaces/measurementunit';
import { BaseService } from './BaseService';
import { MEASUREMENTUNIT, MEASUREMENTUNITS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class MeasurementunitService extends BaseService<Measurementunit>{
  constructor(http: HttpClient) {
    super(http, MEASUREMENTUNIT, MEASUREMENTUNITS);
  }
}
