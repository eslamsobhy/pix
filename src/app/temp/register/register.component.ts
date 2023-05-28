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
      'background-color': '#2338B0',
      color: '#fff',
    };
  }

  onLeave() {
    this.isHovered = false;
    this.changeStyle = {};
  }
}
