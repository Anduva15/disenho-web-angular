import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(login: string, password: string) {
    const apiUrl = `http://localhost:8085/login`;
    const credentials = { login, password };

    return this.http
      .post(apiUrl, credentials)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      )
      .subscribe(
        (response: any) => {
          localStorage.setItem('auth_token', response.token);
          this.router.navigate(['/menu']); // Navigate to root route
        },
        (error) => {
          console.error(error);
        }
      );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
