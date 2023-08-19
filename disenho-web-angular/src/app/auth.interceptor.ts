import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token'); // Get the token from local storage

    if (token) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}