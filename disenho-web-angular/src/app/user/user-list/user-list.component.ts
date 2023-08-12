import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  user: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.user = users;
    });
  }

  editUser(userId: string) {
    this.router.navigate(['/users/edit', userId]); // Navigate to the edit page
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.delete(userId).subscribe(() => {
        // Refresh the user list after deletion
        this.userService.getAll().subscribe((users) => {
          this.user = users;
        });
      });
    }
  }
}
