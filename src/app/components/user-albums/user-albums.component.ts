import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { UsersInfoService } from 'src/app/services/users-info.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent implements OnInit {
  userId:any;
  userInfo:any;
  userAlbums:any;

  constructor(private AlbumsService:AlbumsService, private UsersService:UsersInfoService, private curRoute:ActivatedRoute) {
    this.userId = this.curRoute.snapshot.params['userId'];
  }

  ngOnInit() {
    this.AlbumsService.getUserAlbums(this.userId).subscribe({
      next: (data) => this.userAlbums = data,
      error: (err) => console.log(err)
    })

    this.UsersService.getUserById(this.userId).subscribe({
      next: (data) => this.userInfo = data,
      error: (err) => console.log(err)
    })
  }
}
