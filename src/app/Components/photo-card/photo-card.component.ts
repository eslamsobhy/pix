import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent {
  @Input() photoInfo:any;

  mouseOverStar = false;

  mouseOver() {
    this.mouseOverStar = true;
  }

  mouseOut() {
    this.mouseOverStar = false;
  }
}
