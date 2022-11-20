import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { signupData } from '../interfaces/signup.interface';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  signup(payload: signupData) {
    const URL = `${environment.APIURL}/user/signup`;
    return this.http.post(URL, payload);
  }
}
