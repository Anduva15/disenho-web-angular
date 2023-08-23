import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../interfaces/account';
import { UrlParam } from '../../../interfaces/UrlParam';
import { Router } from '@angular/router';
import {
  ACCOUNT,
  ACCOUNTS,
  ACCOUNT_EDIT,
  ACCOUNT_FORM_STRUCTURE,
} from '../../../constants';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  ACCOUNT = ACCOUNT;
  ACCOUNTS = ACCOUNTS;
  ACCOUNT_FORM_STRUCTURE = ACCOUNT_FORM_STRUCTURE;

  constructor(
    private accountsService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts = (urlParams?: UrlParam | undefined) => {
    this.accountsService.getAll(urlParams).subscribe((accounts) => {
      this.accounts = accounts;
    });
  };

  editAccount(accountId: string) {
    this.router.navigate([ACCOUNT_EDIT, accountId]); // Navigate to the edit page
  }

  deleteAccount = (accountId: string) => {
    if (confirm('Are you sure you want to delete this account?')) {
      this.accountsService.delete(accountId).subscribe(() => {
        this.accountsService.getAll().subscribe((u) => {
          this.accounts = u;
        });
      });
    }
  };
}
