import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginData } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(payload: LoginData) {
    const URL = `${environment.APIURL}/user/login`;
    return this.http.post(URL, payload);
  }
}
