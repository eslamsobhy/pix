import { Component, OnInit } from '@angular/core';
import { UsersInfoService } from 'src/app/services/users-info.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  Users: any;
  constructor(private usersService:UsersInfoService){}

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
}
