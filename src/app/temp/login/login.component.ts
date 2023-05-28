import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userAuthService:UserAuthService, private router:Router) {
  }

  get validEmail() {
    return this.myValidation.controls['email'].valid;
  }

  get passwordValid() {
    return this.myValidation.controls['password'].valid;
  }

  get emailExists() {
    return this.myValidation.controls['email'].value;
  }

  get passwordExists() {
    return this.myValidation.controls['password'].value;
  }

  get dataValid() {
    return this.myValidation.valid;
  }

  myValidation = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@#$%^&+=]).*$'),
    ]),
  });

  join() {
    console.log(this.myValidation.controls['email'].value);
    if (this.dataValid) {
      // this.myValidation.controls.email.setValue('');
      // this.myValidation.controls.password.setValue('');

      this.userAuthService.users.filter((userObj) => {
        if(userObj.email === this.myValidation.controls['email'].value && userObj.password === this.myValidation.controls['password'].value) {
          this.userAuthService.setToken('logged-in', userObj.role);
          this.router.navigateByUrl('/users');
        }
      })
    }
  }
}
