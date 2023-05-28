import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  routeURL: any;
  constructor(private userAuthService:UserAuthService, private router:Router){
    // this.routeURL = this.router.url;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :boolean {
      this.routeURL = state.url;
      console.log('state', state.url);
      // console.log(this.routeURL);
      // console.log('/'+ route.url[0].path);
      if(this.routeURL == '/login') {
        if(this.userAuthService.getLoggedToken()) {
          this.routeURL = '/users';
          this.router.navigateByUrl('/users');
          return true;
        } else {
          // this.routeURL = '/login';
          // this.router.navigateByUrl('/login');
          return false;
        }
      } else {
        if(this.userAuthService.getLoggedToken()) {
          // this.routeURL = state.url;
          // this.router.navigateByUrl(this.routeURL);
          return true;
        } else {
          this.routeURL = '/login';
          this.router.navigateByUrl('/login');
          return false;
        }
      }
  }
}
