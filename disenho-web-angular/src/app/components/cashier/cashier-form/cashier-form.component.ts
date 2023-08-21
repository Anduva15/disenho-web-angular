import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { CASHIERS, CASHIER_FORM_STRUCTURE } from 'src/app/constants';
import { CashierService } from '../../../services/cashier.service';
import { Cashier } from '../../../interfaces/cashier';

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
  }

  onSubmit(formData: any) {
    // Update cashier data with form data
    this.cashier = { ...this.cashier, ...formData };

    if (this.isNew) {
      this.cashierService.create(omit(this.cashier, ['id'])).subscribe(() => {
        // Redirect to user list after successful creation
        this.router.navigate([CASHIERS]);
      });
    } else {
      this.cashierService
        .update(this.cashier.id, this.cashier)
        .subscribe(() => {
          // Redirect to user list after successful update
          this.router.navigate([CASHIERS]);
        });
    }
  }
}
