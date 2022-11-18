import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginData, LoginResponse } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(payload: LoginData): Observable<LoginResponse> {
    const URL = `${environment.APIURL}/user/login`;
    return this.http.post<LoginResponse>(URL, payload);
  }
}
