import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CashierService } from '../../../services/cashier.service';
import { CASHIER_FORM_STRUCTURE } from 'src/app/constants';
import { Cashier } from 'src/app/interfaces/cashier';

@Component({
  selector: 'app-cashier-detail',
  templateUrl: './cashier-detail.component.html',
  styleUrls: ['./cashier-detail.component.css'],
})
export class CashierDetailComponent implements OnInit {
  CASHIER_FORM_STRUCTURE = CASHIER_FORM_STRUCTURE;
  cashier: Cashier = {
    id: 0,
    registrationDate: '',
    description: '',
    startingMoney: 0,
    closingMoney: 0,
    cashierOpeningDate: new Date(),
    cashierClosingDate: new Date(),
    restaurantId: '',
  };

  constructor(
    private cashierService: CashierService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load user data based on route parameter
        const cashierId = params['id'];
        this.cashierService.getOne(cashierId).subscribe((cashier) => {
          this.cashier = cashier;
        });
      }
    });
  }
}
