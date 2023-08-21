import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { USERS, USER_FORM_STRUCTURE } from 'src/app/constants';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  isNew: boolean = true;
  formFields = USER_FORM_STRUCTURE;

  user: User = {
    id: 0,
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load user data if editing an existing user
        const userId = params['id'];
        this.userService.getOne(userId).subscribe((user) => {
          this.user = user;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update user data with form data
    this.user = { ...this.user, ...formData };

    if (this.isNew) {
      this.userService.create(omit(this.user, ['id'])).subscribe(() => {
        // Redirect to user list after successful creation
        this.router.navigate([USERS]);
      });
    } else {
      this.userService.update(this.user.id, this.user).subscribe(() => {
        // Redirect to user list after successful update
        this.router.navigate([USERS]);
      });
    }
  }
}
