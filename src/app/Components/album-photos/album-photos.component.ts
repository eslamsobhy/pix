import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  albumId:any;
  albumPhotos:any;

  constructor(private myService:AlbumsService, private curRoute:ActivatedRoute){
    this.albumId = this.curRoute.snapshot.params['albumId'];
  }

  ngOnInit() {
    this.myService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => this.albumPhotos = data,
      error: (err) => console.log(err)
    })
  }
}
