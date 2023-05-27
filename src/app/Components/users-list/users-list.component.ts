import { Component, OnInit, Provider } from '@angular/core';
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

  update(userData:any){
    
  }

  /*
  resetPage(){
    this.myRouter.routeReuseStrategy.shouldReuseRoute = () => false;
    this.myRouter.onSameUrlNavigation = 'reload';
    this.myRouter.navigate(['./'], {relativeTo: this.route});
  }*/
}
