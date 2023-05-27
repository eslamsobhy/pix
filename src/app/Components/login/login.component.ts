import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
    console.log(this.myValidation.valid);
    if (this.dataValid) {
      this.myValidation.controls.email.setValue('');
      this.myValidation.controls.password.setValue('');
    }
  }
}
