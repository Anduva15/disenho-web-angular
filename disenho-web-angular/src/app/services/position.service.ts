import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from '../interfaces/position';
import { BaseService } from './BaseService';
import { POSITION, POSITIONS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class PositionService extends BaseService<Position>{

  constructor(http: HttpClient) {
    super(http, POSITION, POSITIONS);
  }
}
