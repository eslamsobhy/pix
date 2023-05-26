import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
  }
}
