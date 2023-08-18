import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../interfaces/restaurant';
import { BaseService } from './BaseService';
import { RESTAURANT, RESTAURANTS } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService extends BaseService<Restaurant> {
  constructor(http: HttpClient) {
    super(http, RESTAURANT, RESTAURANTS);
  }
}
