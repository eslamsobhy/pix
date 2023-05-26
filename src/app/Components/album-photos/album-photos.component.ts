import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { UsersInfoService } from 'src/app/services/users-info.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  userId:any;
  userInfo:any;
  albumId:any;
  albumInfo:any;
  albumPhotos:any;

  constructor(private usersService:UsersInfoService, private albumsService:AlbumsService, private curRoute:ActivatedRoute){
    this.albumId = this.curRoute.snapshot.params['albumId'];
    this.userId = this.curRoute.snapshot.params['userId'];
  }

  ngOnInit() {
    this.usersService.getUserById(this.userId).subscribe({
      next: (data) => this.userInfo = data,
      error: (err) => console.log(err)
    })

    this.albumsService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => this.albumPhotos = data,
      error: (err) => console.log(err)
    })

    this.albumsService.getUserAlbums(this.userId).subscribe({
      next: (data) => {
        let albums: {[index: string]:any} = data;
        this.albumInfo = albums[this.albumId - 1];
      },
      error: (err) => console.log(err)
    })
  }
}
