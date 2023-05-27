import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css'],
})
export class RegisterComponent {
  isHovered: boolean = false;
  changeStyle: any = {};

  onHover() {
    this.isHovered = true;
    this.changeStyle = {
      'background-color': '#09946f',
      color: '#fff',
    };
  }

  onLeave() {
    this.isHovered = false;
    this.changeStyle = {};
  }
}
