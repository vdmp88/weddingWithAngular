import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, LoginRequest } from '../interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string =
    'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  login(authData: Auth): Observable<any> {
    return this.httpClient.post<LoginRequest>(
      `${this.baseUrl}/app/api/v1/user/login`,
      authData,
      { observe: 'response' }
    );
  }
}
