import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isOpened: boolean = false;

  constructor(private userAuthService:UserAuthService, private router:Router){}

  get loggedIn() {
    return this.userAuthService.getLoggedToken();
  }

  @HostListener('window: resize')
  onWindowResize() {
    this.updateClass();
  }

  @HostListener('window: scroll', [])
  onWindowScroll() {
    this.isOpened = false;
  }

  updateClass() {
    if (window.innerWidth > 900) {
      this.isOpened = false;
    }
  }

  toggleClass() {
    this.isOpened = !this.isOpened;
  }

  logOut() {
    console.log('tmam');
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
