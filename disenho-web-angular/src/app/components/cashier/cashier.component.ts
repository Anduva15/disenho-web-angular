import { Component } from '@angular/core';
import { CASHIERS, CASHIER_ADD } from '../../constants';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css'],
})
export class CashierComponent {
  CASHIERS = CASHIERS;
  CASHIER_ADD = CASHIER_ADD;
  constructor() {}
}
