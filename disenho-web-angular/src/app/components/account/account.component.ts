import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { Account } from '../../interfaces/account';
import { ACCOUNT, ACCOUNT_ADD, ACCOUNTS,  ACCOUNT_FORM_STRUCTURE} from '../../constants';
import { } from 'src/app/constants';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  ACCOUNTS = ACCOUNTS
  ACCOUNT = ACCOUNT;
  ACCOUNT_ADD = ACCOUNT_ADD;
}
