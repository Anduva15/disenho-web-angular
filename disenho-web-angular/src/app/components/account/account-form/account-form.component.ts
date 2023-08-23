import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { ACCOUNTS, ACCOUNT_FORM_STRUCTURE } from 'src/app/constants';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../interfaces/account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent {
  isNew: boolean = true;
  formFields = ACCOUNT_FORM_STRUCTURE;

  account: Account = {
    id: 0,
    totalAmount: 0,
    clients: [],
    entryDate: new Date(),
    exitDate: new Date(),
    reservationDate: new Date(),
    reservationId: 'string',
    bar: false,
    restaurantId: 'string',
    status: 'string',
  };

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load ACCOUNT data if editing an existing ACCOUNT
        const ACCOUNTId = params['id'];
        this.accountService.getOne(ACCOUNTId).subscribe((ACCOUNT) => {
          this.account = ACCOUNT;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update ACCOUNT data with form data
    this.account = { ...this.account, ...formData };

    if (this.isNew) {
      this.accountService.create(omit(this.account, ['id'])).subscribe(() => {
        // Redirect to ACCOUNT list after successful creation
        this.router.navigate([ACCOUNTS]);
      });
    } else {
      this.accountService
        .update(this.account.id, this.account)
        .subscribe(() => {
          // Redirect to ACCOUNT list after successful update
          this.router.navigate([ACCOUNTS]);
        });
    }
  }
}
