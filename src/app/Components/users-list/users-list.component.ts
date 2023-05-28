import { Component, OnInit, Provider } from '@angular/core';
import { UsersInfoService } from 'src/app/services/users-info.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  Users: any;
  constructor(
    private usersService: UsersInfoService,
    private myRouter: Router,
    private route: ActivatedRoute,
    private userAuthService:UserAuthService
  ) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.Users = data;
      },
      error: (e) => {
        throw e;
      },
    });
  }

  get userRole() {
    return this.userAuthService.getRoleToken();
  }

  selectUser() {}

  addUser() {
    this.myRouter.navigateByUrl(`users/createNew`);
  }

  dataReady(userData: {
    name: string;
    email: string;
    phone: string;
    address: { city: string; street: string; suite: string };
  }) {
    this.Users.push(userData);
    //Refresh Component
    // this.resetPage();
  }

  update(userData:any,userId:any){
    let refIndex = this.Users.findIndex((el:any)=>{el.id === userId});
    this.Users[refIndex].name = userData.name;
    this.Users[refIndex].email = userData.email;
    this.Users[refIndex].phone = userData.phone;
    this.Users[refIndex].address.city = userData.address.city;
    this.Users[refIndex].address.street = userData.address.street;
    this.Users[refIndex].address.suite = userData.address.suite;
  }

  /*
  resetPage(){
    this.myRouter.routeReuseStrategy.shouldReuseRoute = () => false;
    this.myRouter.onSameUrlNavigation = 'reload';
    this.myRouter.navigate(['./'], {relativeTo: this.route});
  }*/
}
