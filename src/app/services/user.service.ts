import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../common/models/baseUrl';
import { User } from '../common/models/user';
import { RegisterResource } from '../common/models/registerResource';
import { LoginResource } from '../common/models/loginResource';

@Injectable()
export class UserService {
  userUrl = `${ baseUrl }/user`;
  isAuthenticated = new BehaviorSubject<boolean>(false);
  token = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  register(userDto: User): Observable<RegisterResource> {
    return this.http.post<RegisterResource>(this.userUrl, userDto);
  }

  login(userDto: User): Observable<LoginResource> {
    return this.http.post<LoginResource>(`${this.userUrl}/login`, userDto);
  }
}
