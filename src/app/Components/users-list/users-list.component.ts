import { Component, Input, OnInit, Provider } from '@angular/core';
import { UsersInfoService } from 'src/app/services/users-info.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
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

  update(
    userData: {
      name: string;
      email: string;
      phone: string;
      address: { city: string; street: string; suite: string };
    },
    userId: any
  ) {
    // console.log('Event:' + userData.phone);
    // console.log('userId:' + userId);
    let refIndex = this.Users.findIndex((el: any) => {
      if (el.id == userId) {
        return true;
      }
      return false;
    });
    // console.log(refIndex);
    this.Users[refIndex].name = userData.name;
    this.Users[refIndex].email = userData.email;
    this.Users[refIndex].phone = userData.phone;
    this.Users[refIndex].address.city = userData.address.city;
    this.Users[refIndex].address.street = userData.address.street;
    this.Users[refIndex].address.suite = userData.address.suite;
    // console.log('Users:' + this.Users[refIndex].name);
  }

  delete(userName:any){
    let refIndex = this.Users.findIndex((el: any) => {
      if (el.name == userName) {
        return true;
      }
      return false;
    });
    this.Users.splice(refIndex,1);
  }
  /*
  resetPage(){
    this.myRouter.routeReuseStrategy.shouldReuseRoute = () => false;
    this.myRouter.onSameUrlNavigation = 'reload';
    this.myRouter.navigate(['./'], {relativeTo: this.route});
  }*/
}
