import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../interfaces/brand';
import { BaseService } from './BaseService';
import { BRAND, BRANDS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseService<Brand> {

  constructor(http: HttpClient) {
    super(http, BRAND, BRANDS);
  }
  
}
