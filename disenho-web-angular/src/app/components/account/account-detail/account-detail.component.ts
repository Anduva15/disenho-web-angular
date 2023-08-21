import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../interfaces/account';
import {
  ACCOUNT,
  ACCOUNT_ADD,
  ACCOUNT_FORM_STRUCTURE,
} from '../../../constants';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent {
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
    private AccountService: AccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load restaurant data based on route parameter
        const accountId = params['id'];
        this.AccountService.getOne(accountId).subscribe((account) => {
          this.account = account;
        });
      }
    });
  }
}
