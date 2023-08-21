import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../interfaces/reservation';
import { BaseService } from './BaseService';
import { RESERVATION, RESERVATIONS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class ReservationService extends BaseService<Reservation>{
  constructor(http: HttpClient) {
    super(http, RESERVATION, RESERVATIONS);
  }
}
