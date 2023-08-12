import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  uriSingular = 'user';
  uriPlural = 'users';
  interfaceProperties: string[] = [
    'Name',
    'firstName',
    'lastName',
    'employeeId',
    'phoneNumber1',
    'phoneNumber2',
    'login',
    'password',
    'isSystemAdmin',
    'isSecurityAdmin',
    'isRestaurantAdmin',
    'isAccountsAdmin',
  ];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  editUser(userId: string) {
    this.router.navigate(['/user/edit', userId]); // Navigate to the edit page
  }

  deleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.delete(userId).subscribe(() => {
        this.userService.getAll().subscribe((u) => {
          this.users = u;
        });
      });
    }
  };
}
