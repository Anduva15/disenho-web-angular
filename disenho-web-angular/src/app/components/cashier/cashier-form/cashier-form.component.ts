import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { CASHIERS, CASHIER_FORM_STRUCTURE } from 'src/app/constants';
import { CashierService } from '../../../services/cashier.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Cashier } from '../../../interfaces/cashier';
import { NgModel } from '@angular/forms';
import { Restaurant } from 'src/app/interfaces/restaurant';
@Component({
  selector: 'app-cashier-form',
  templateUrl: './cashier-form.component.html',
  styleUrls: ['./cashier-form.component.css'],
})
export class CashierFormComponent {
  isNew: boolean = true;
  formFields = CASHIER_FORM_STRUCTURE;

  cashier: Cashier = {
    id: 0,
    registrationDate: new Date(),
    description: '',
    startingMoney: 0,
    closingMoney: 0,
    cashierOpeningDate: null,
    cashierClosingDate: null,
    restaurantId: "",
  };
  allRestaurantIds: number[] = []; 
  constructor(
    private cashierService: CashierService,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load user data if editing an existing user
        const userId = params['id'];
        this.cashierService.getOne(userId).subscribe((cashier) => {
          this.cashier = cashier;
          this.isNew = false;
        });
      }
    });
    this.restaurantService.getAll().subscribe(restaurants => {
      restaurants.forEach(restaurant => {
        this.allRestaurantIds.push(restaurant.id);
      });
    });
  }

  

  onSubmit(formData: any) {
    this.cashier = { ...this.cashier, ...formData };

    if (this.isNew) {
      this.cashierService.create(omit(this.cashier, ['id'])).subscribe(() => {
        this.router.navigate([CASHIERS]);
      });
    } else {
      this.cashierService
        .update(this.cashier.id, this.cashier)
        .subscribe(() => {
          this.router.navigate([CASHIERS]);
        });
    }
  }

  closeCashier() {
    this.cashier.cashierClosingDate = new Date(); 
    this.cashierService.update(this.cashier.id, this.cashier).subscribe(() => {
      this.router.navigate([CASHIERS]);
    });
  }

  openCashier() {
     // Check if there's already an opened cashier
  this.cashierService.getOpenedCashier().subscribe((openedCashier: Cashier | null) => {
    if (openedCashier) {
      const decision = window.confirm(
        'There is already a cashier opened. Do you want to close the existing one and open a new cashier?'
      );

      if (decision) {
        // Close the existing cashier and open a new one
        openedCashier.cashierClosingDate = new Date(); // Set the closing date
        this.cashierService.update(openedCashier.id, openedCashier).subscribe(() => {
          this.openNewCashier();
        });
      }
      // If user cancels, do nothing
    } else {
      // No opened cashier, simply open a new one
      this.openNewCashier();
      this.cashier.startingMoney = 0
    }
  });
}

openNewCashier() {
  this.cashier.cashierOpeningDate = new Date();

  this.cashierService.update(this.cashier.id, this.cashier).subscribe(() => {
    this.router.navigate([CASHIERS]);
  });
}
  }

