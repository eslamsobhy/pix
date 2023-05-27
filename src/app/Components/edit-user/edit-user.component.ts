import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit{
  myValidation = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
      Validators.maxLength(11),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    ]),
    city: new FormControl(),
    street: new FormControl(),
    suite: new FormControl(),
  });
  userError = 0;
  phoneError = 0;
  emailError = 0;
  addressError = 0;
  additionSuccess = 1;
  myModalInstance: any;

  //Event For Sending Data
  @Output('dataUpdated') additionEvent = new EventEmitter();
  @Input('userData') user:any;

  constructor(private modalService: NgbModal) {
  }
  ngOnInit(): void {
   this.myValidation.controls["name"].setValue(this.user.name);
   this.myValidation.controls["email"].setValue(this.user.email);
   this.myValidation.controls["phone"].setValue(this.user.phone);
   this.myValidation.controls["city"].setValue(this.user.address.city);
   this.myValidation.controls["street"].setValue(this.user.address.street);
   this.myValidation.controls["suite"].setValue(this.user.address.suite);
  }

  open(content: any, event:any) {
    event.stopPropagation();
    this.myModalInstance = this.modalService.open(content);
    this.myModalInstance.result.then(
      (result: any) => {},
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

  editUser() {
    if (!this.myValidation.controls['name'].valid) {
      this.userError = 1;
    } else {
      this.userError = 0;
    }
    if (!this.myValidation.controls['phone'].valid) {
      this.phoneError = 1;
    } else {
      this.phoneError = 0;
    }
    if (!this.myValidation.controls['email'].valid) {
      this.emailError = 1;
    } else {
      this.emailError = 0;
    }
    if (
      !this.myValidation.controls['city'].valid ||
      !this.myValidation.controls['street'].valid ||
      !this.myValidation.controls['suite'].valid
    ) {
      this.addressError = 1;
    } else {
      this.addressError = 0;
    }

    if (
      this.userError ||
      this.phoneError ||
      this.emailError ||
      this.addressError
    ) {
      this.additionSuccess = 0;
      throw 'Invalid Data...';
    }

    // Send Data
    this.additionEvent.emit({
      name: this.myValidation.controls['name'].value,
      age: this.myValidation.controls['phone'].value,
      email: this.myValidation.controls['email'].value,
      address: {
        city: this.myValidation.controls['city'].value,
        street: this.myValidation.controls['street'].value,
        suite: this.myValidation.controls['suite'].value,
      },
    });
    this.myValidation.reset();
    this.additionSuccess = 1;
    // this.myValidation.controls['name'].markAsUntouched();
    // this.myValidation.controls['phone'].markAsUntouched();
    // this.myValidation.controls['email'].markAsUntouched();
    this.myModalInstance.close();
  }
}
