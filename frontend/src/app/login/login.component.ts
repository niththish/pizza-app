import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

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
      next: (data) => {
        localStorage.setItem('token', data.token);
        this.route.navigateByUrl('/user');
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
    if (localStorage.getItem('token')) {
      this.route.navigateByUrl('/user');
    }
  }
}
