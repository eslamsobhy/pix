import { Component, Input, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() albumInfo:any;
  displayPhotos:any;

  constructor(private myService:AlbumsService) {}

  ngOnInit() {
    this.myService.getAlbumPhotos(this.albumInfo.id).subscribe({
      next: (data) => {
        this.displayPhotos = data;
      },
      error: (err) => console.log(err)
    })
  }
}
