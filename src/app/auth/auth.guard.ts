import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  routeURL: any;
  constructor(private userAuthService:UserAuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :boolean {

      this.routeURL = state.url;

      if(this.routeURL == '/login') {
        if(this.userAuthService.getLoggedToken()) {
          this.routeURL = '/users';
          this.router.navigateByUrl('/users');
          return true;
        } else {
          return false;
        }
      } else {
        if(this.userAuthService.getLoggedToken()) {
          return true;
        } else {
          this.routeURL = '/login';
          this.router.navigateByUrl('/login');
          return false;
        }
      }
  }
}
