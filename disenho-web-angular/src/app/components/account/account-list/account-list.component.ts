import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../interfaces/account';
import { ACCOUNT, ACCOUNTS, ACCOUNT_ADD, ACCOUNT_EDIT,  ACCOUNT_FORM_STRUCTURE} from '../../../constants';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  accounts: Account[] = [];
  ACCOUNT = ACCOUNT;
  ACCOUNTS = ACCOUNTS;
  ACCOUNT_FORM_STRUCTURE = ACCOUNT_FORM_STRUCTURE;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountService.getAll().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  editRestaurant(userId: string) {
    this.router.navigate([ACCOUNT_EDIT, userId]); // Navigate to the edit page
  }

  deleteRestaurant = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.accountService.delete(userId).subscribe(() => {
        this.accountService.getAll().subscribe((u) => {
          this.accounts = u;
        });
      });
    }
  };
}
