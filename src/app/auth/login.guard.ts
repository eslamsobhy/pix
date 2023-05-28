import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private userAuthService:UserAuthService, private router:Router){}

  canActivate(): boolean {
    if(this.userAuthService.getLoggedToken()) {
      this.router.navigateByUrl('/users');
      return false;
    }
    return true;
  }
}
