import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { USER_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  formItems = USER_FORM_STRUCTURE;
  user: User = {
    _id: '',
    name: '',
    firstName: '',
    lastName: '',
    employeeId: '',
    phoneNumber1: '',
    phoneNumber2: '',
    login: '',
    password: '',
    isSystemAdmin: false,
    isSecurityAdmin: false,
    isRestaurantAdmin: false,
    isAccountsAdmin: false,
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load user data based on route parameter
        const userId = params['id'];
        this.userService.getOne(userId).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }
}
