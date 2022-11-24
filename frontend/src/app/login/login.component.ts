import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorResponse: String = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router
  ) {
    this.loginForm = fb.group({
      username: [, [Validators.required, Validators.pattern('^[a-zA-Z]{4,}$')]],
      password: [
        ,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          ),
        ],
      ],
    });
  }

  get userName() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  showPassword(elem: HTMLInputElement) {
    if (elem.type === 'password') elem.type = 'text';
    else elem.type = 'password';
  }

  login() {
    const payload = this.loginForm.value;
    this.loginService.login(payload).subscribe({
      next: async (data) => {
        localStorage.setItem('token', data.token);
        const role: any = await lastValueFrom(this.loginService.getRole());
        localStorage.setItem('role', role.role);

        if (role.role === 'customer') this.route.navigateByUrl('/user');
        else if (role.role === 'admin') this.route.navigateByUrl('/admin');
      },
      error: (err) => {
        this.errorResponse = err.error.response;
        setTimeout(() => {
          this.errorResponse = '';
        }, 4000);
      },
    });
  }

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    if (token && role === 'customer') this.route.navigateByUrl('/user');
    else if (token && role === 'admin') this.route.navigateByUrl('/admin');
  }
}
