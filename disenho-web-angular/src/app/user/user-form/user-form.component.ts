import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
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
  isNew: boolean = true;

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

  onSubmit() {
    if (this.isNew) {
      this.userService.create(omit(this.user, ['_id'])).subscribe(() => {
        // Redirect to user list after successful creation
        this.router.navigate(['/userList']);
      });
    } else {
      this.userService.update(this.user._id, this.user).subscribe(() => {
        // Redirect to user list after successful update
        this.router.navigate(['/userList']);
      });
    }
  }
}
