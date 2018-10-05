import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList = [];
  userForm: FormGroup;
  isEditable = false;

  constructor(private ngxSmartModalService: NgxSmartModalService) {
    this.userForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'mobileNo': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  openCreateUserModal() {
    this.ngxSmartModalService.getModal('myModal').open();
  }

  addUser() {
    console.log(this.userForm.value);
  }

  updateUser() {

  }

}
