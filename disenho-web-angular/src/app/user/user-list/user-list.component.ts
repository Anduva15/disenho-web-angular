import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service'; 
import { User } from '../../interfaces/user'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  dataSource: MatTableDataSource<User> | undefined;
  displayedColumns: string[] = ['_id', 'name', 'firstName', 'lastName', 'employeeId', 'phoneNumber1', 'phoneNumber2', 'login', 'password', 'isSystemAdmin', 'isSecurityAdmin', 'isRestaurantAdmin', 'isAccountsAdmin']; // Add more columns as needed

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
    });
  }
}
