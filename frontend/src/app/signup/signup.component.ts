import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  successResponse: string = '';
  errorResponse: string = '';

  constructor(private fb: FormBuilder, private signupService: SignupService) {
    this.signupForm = this.fb.group({
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
      email: [, [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      mobile: [, [Validators.required, Validators.pattern(/\d{10}/)]],
      address: this.fb.group({
        line1: [, Validators.required],
        line2: [, Validators.required],
        city: [, Validators.required],
      }),
    });
  }

  get userName() {
    return this.signupForm.controls['username'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  get email() {
    return this.signupForm.controls['email'];
  }

  get mobile() {
    return this.signupForm.controls['mobile'];
  }

  get line1() {
    return this.signupForm.get('address.line1');
  }

  get line2() {
    return this.signupForm.get('address.line2');
  }

  get city() {
    return this.signupForm.get('address.city');
  }

  showPassword(elem: HTMLInputElement) {
    if (elem.type === 'password') {
      elem.type = 'text';
    } else {
      elem.type = 'password';
    }
  }

  signup() {
    const payload = this.signupForm.value;
    this.signupService.signup(payload).subscribe({
      next: (data: any) => {
        this.successResponse = data.status;
        setTimeout(() => {
          this.successResponse = '';
        }, 4000);
      },
      error: (err) => {
        this.errorResponse = err.error.response;
        setTimeout(() => {
          this.errorResponse = '';
        }, 4000);
      },
    });
  }

  ngOnInit(): void {}
}
