import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal-content',
	standalone: true,
	template: `
  <div class="modal-body p-2">
		<img [src]="photoUrl" class="rounded-2" style="width: 100%; height:100%">
  </div>
	`,
})
export class NgbdModalContent {
	@Input() photoUrl: any;

	constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent {
  @Input() photoInfo: any;
  mouseOverStar = false;
  starClicked = false;

  constructor(private modalService: NgbModal) {}

	open() {
    const modalRef = this.modalService.open(NgbdModalContent, {centered: true});
    modalRef.componentInstance.photoUrl = this.photoInfo.url;
	}

  mouseOver() {
    this.mouseOverStar = true;
  }

  mouseOut() {
    this.mouseOverStar = false;
  }

  starClick(e:any) {
    this.starClicked = !this.starClicked;
    e.stopPropagation();
  }
}
