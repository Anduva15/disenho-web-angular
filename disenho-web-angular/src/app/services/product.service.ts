import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { BaseService } from './BaseService';
import { PRODUCT, PRODUCTS } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<Product> {
  constructor(http: HttpClient) {
    super(http, PRODUCT, PRODUCTS);
  }
}
