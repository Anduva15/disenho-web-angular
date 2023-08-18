import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { USER, USERS, USER_EDIT, USER_FORM_STRUCTURE } from '../../constants';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  USER = USER;
  USERS = USERS;
  USER_FORM_STRUCTURE = USER_FORM_STRUCTURE;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  editUser(userId: string) {
    this.router.navigate([USER_EDIT, userId]); // Navigate to the edit page
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
