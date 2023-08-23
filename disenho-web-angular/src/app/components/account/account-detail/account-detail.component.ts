import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../interfaces/account';
import { ACCOUNT_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  ACCOUNT_FORM_STRUCTURE = ACCOUNT_FORM_STRUCTURE;
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load ACCOUNT data based on route parameter
        const ACCOUNTId = params['id'];
        this.accountService.getOne(ACCOUNTId).subscribe((account) => {
          this.account = account;
        });
      }
    });
  }
}
