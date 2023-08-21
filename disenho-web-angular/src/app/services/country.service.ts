import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { BaseService } from './BaseService';
import { COUNTRY, COUNTRYS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService<Country>{
  constructor(http: HttpClient) {
    super(http, COUNTRY, COUNTRYS);
  }
}
