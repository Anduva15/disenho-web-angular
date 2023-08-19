import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  
  constructor(private authService: AuthService) { }
  
  userLogin() {
    this.authService.login(this.login, this.password);
  }
}
