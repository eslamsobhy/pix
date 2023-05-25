import { Component, OnInit } from '@angular/core';
import { UsersInfoService } from 'src/app/services/users-info.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  Users: any;
  constructor(private usersService:UsersInfoService,private  myRouter:Router){}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next:(data)=>{
        this.Users = data;
      },
      error:(e)=>{
        throw(e);
      }
    });
  }
  selectUser(){

  }

  addUser(){
    this.myRouter.navigateByUrl(`users/createNew`);
  }
}
