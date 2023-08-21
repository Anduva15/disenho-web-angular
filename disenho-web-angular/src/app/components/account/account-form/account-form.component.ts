import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../interfaces/account';
import { ACCOUNTS, ACCOUNT_FORM_STRUCTURE } from '../../../constants';
@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent {
  isNew: boolean = true;
  RESTAURANT_FORM_STRUCTURE = ACCOUNT_FORM_STRUCTURE;

  account: Account = {
    id: 0,
    totalAmount: 0,
    clients: [],
    entryDate: new Date(NaN),
    exitDate: new Date(NaN),
    reservationDate: new Date(NaN),
    reservationId: '',
    bar: false,
    restaurantId: 'String',
    status: 'String',
  };

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load restaurant data if editing an existing user
        const accountid = params['id'];
        this.accountService.getOne(accountid).subscribe((account) => {
          this.account = account;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update user data with form data
    this.account = { ...this.account, ...formData };

    if (this.isNew) {
      this.accountService.create(omit(this.account, ['id'])).subscribe(() => {
        // Redirect to user list after successful creation
        this.router.navigate([ACCOUNTS]);
      });
    } else {
      this.accountService
        .update(this.account.id, this.account)
        .subscribe(() => {
          // Redirect to user list after successful update
          this.router.navigate([ACCOUNTS]);
        });
    }
  }
}
