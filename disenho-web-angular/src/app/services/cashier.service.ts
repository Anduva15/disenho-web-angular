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
}