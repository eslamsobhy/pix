import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {

  myModalInstance: any;

  //Event For Sending Data
  @Output('deleteEvnt') additionEvent = new EventEmitter();
  @Input('userName') user_name:any;

  constructor(private modalService: NgbModal) {}

  open(content: any, event: any) {
    event.stopPropagation();
    this.myModalInstance = this.modalService.open(content);
    this.myModalInstance.result.then(
      (result: any) => {
        this.additionEvent.emit(result);
      },
      (reason: any) => {}
    );
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  closeModal() {
    this.myModalInstance.close();
  }
}
