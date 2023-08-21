import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../interfaces/provider';
import { BaseService } from './BaseService';
import { PROVIDER, PROVIDERS } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class ProviderService extends BaseService<Provider>{
  constructor(http: HttpClient) {
    super(http, PROVIDER, PROVIDERS);
  }
}
