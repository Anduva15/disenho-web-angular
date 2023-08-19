import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { BaseService } from './BaseService';
import { USERS, USER } from '../constants';
import { Observable } from 'rxjs';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http, USER, USERS);
  }

  override create(user: Omit<User, '_id'>): Observable<User> {
    const saltRounds = 10;

    return new Observable<User>(observer => {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          observer.error(err);
        } else {
          bcrypt.hash(String(user.password), salt, (err, hash) => {
            if (err) {
              observer.error(err);
            } else {
              const userWithHashedPassword: User = {
                ...user as User,
                password: hash,
              };

              super.create(userWithHashedPassword).subscribe(
                createdUser => {
                  observer.next(createdUser);
                  observer.complete();
                },
                error => {
                  observer.error(error);
                }
              );
            }
          });
        }
      });
    });
  }
}
