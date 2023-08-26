import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cashier } from '../interfaces/cashier';
import { BaseService } from './BaseService';
import { CASHIER, CASHIERS } from '../constants';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashierService extends BaseService<Cashier> {
  constructor(http: HttpClient) {
    super(http, CASHIER, CASHIERS);
  }

  getOpenedCashier(): Observable<Cashier | null> {
    const openedCashierUrl = `${CASHIERS}`;

    return this.http.get<Cashier[]>(openedCashierUrl).pipe(
      map((cashiers: Cashier[]) => {
        const openedCashier = cashiers.find(cashier =>
          cashier.cashierOpeningDate && !cashier.cashierClosingDate
        );

        return openedCashier || null;
      }),
      catchError(() => {
        return of(null); 
      })
    );
  }

  getExistingRestaurantIds(): Observable<string[]> {
    // Make an HTTP request to fetch existing restaurant IDs
    // Adjust the URL based on your API
    const existingRestaurantIdsUrl = `restaurants`;

    return this.http.get<string[]>(existingRestaurantIdsUrl);
  }
}