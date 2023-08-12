import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  createUser(user: User) {
    this.userService.create(user).subscribe((newUser) => {
      this.user.push(newUser);
    });
  }

  updateUser(id: string, user: User) {
    this.userService.update(id, user).subscribe((updatedUser) => {
      const index = this.user.findIndex((u) => u._id === updatedUser._id);
      if (index !== -1) {
        this.user[index] = updatedUser;
      }
    });
  }

  deleteUser(id: string) {
    this.userService.delete(id).subscribe(() => {
      this.user = this.user.filter((user) => user._id !== id);
    });
  }
}
