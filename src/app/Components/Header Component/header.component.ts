import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isOpened: boolean = false;

  @HostListener('window: resize')
  onWindowResize() {
    this.updateClass();
  }

  updateClass() {
    if (window.innerWidth > 900) {
      this.isOpened = false;
    }
  }

  toggleClass() {
    this.isOpened = !this.isOpened;
  }
}
