import { Component, OnInit } from '@angular/core';
import { CashierService } from '../../../services/cashier.service';
import { Router } from '@angular/router';
import {
  CASHIERS,
  CASHIER,
  CASHIER_EDIT,
  CASHIER_FORM_STRUCTURE,
} from '../../../constants';
import { Cashier } from 'src/app/interfaces/cashier';
import { UrlParam } from '../../../interfaces/UrlParam';

@Component({
  selector: 'app-user-list',
  templateUrl: './cashier-list.component.html',
  styleUrls: ['./cashier-list.component.css'],
})
export class CashierListComponent implements OnInit {
  cashiers: Cashier[] = [];
  CASHIERS = CASHIERS;
  CASHIER = CASHIER;
  CASHIER_FORM_STRUCTURE = CASHIER_FORM_STRUCTURE;

  constructor(private cashierService: CashierService, private router: Router) {}

  ngOnInit(): void {
    this.loadCashiers();
  }

  loadCashiers = (urlParams?: UrlParam | undefined) => {
    this.cashierService.getAll(urlParams).subscribe((cashiers) => {
      this.cashiers = cashiers;
    });
  };

  editCashier(cashierId: string) {
    this.router.navigate([CASHIER_EDIT, cashierId]); // Navigate to the edit page
  }

  deleteCashier = (cashierId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.cashierService.delete(cashierId).subscribe(() => {
        this.cashierService.getAll().subscribe((c) => {
          this.cashiers = c;
        });
      });
    }
  };
}
