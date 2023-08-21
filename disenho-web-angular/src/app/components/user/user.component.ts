import { Component } from '@angular/core';
import { USERS, USER_ADD } from '../../constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  USERS = USERS;
  USER_ADD = USER_ADD;
  constructor() {}
}
