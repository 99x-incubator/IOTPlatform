import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  userList = [];
  userForm: FormGroup;
  isEditable = false;
  selectedIndex;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private ngxSmartModalService: NgxSmartModalService, private toastr: ToastrService) {
    this.userForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'mobileNo': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  openCreateUserModal() {
    this.ngxSmartModalService.getModal('myModal').open();
  }

  addUser() {
    this.userList.push(this.userForm.value);
    this.rerender();
    this.ngxSmartModalService.getModal('myModal').close();
    this.resetKpiForm();
    this.toastr.success('User created successfully');
  }

  openModalForUserUpdate(index) {
    this.isEditable = true;
    this.selectedIndex = index;
    this.userForm.setValue({
      firstName: this.userList[index].firstName,
      lastName: this.userList[index].lastName,
      email: this.userList[index].email,
      mobileNo: this.userList[index].mobileNo
    });
    this.ngxSmartModalService.getModal('myModal').open();
  }

  updateUser() {
    const selectedKpi = this.userList[this.selectedIndex];
    selectedKpi.firstName = this.userForm.get('firstName').value;
    selectedKpi.lastName = this.userForm.get('lastName').value;
    selectedKpi.email = this.userForm.get('email').value;
    selectedKpi.mobileNo = this.userForm.get('mobileNo').value;

    this.userList[this.selectedIndex] = selectedKpi;
    this.selectedIndex = null;
    this.ngxSmartModalService.getModal('myModal').close();
    this.resetKpiForm();
    this.rerender();
    this.toastr.success('User updated successfully');
  }

  removeUser(index) {
    this.userList.splice(index, 1);
    this.rerender();
    this.toastr.success('User removed successfully');
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  closeSmartModal() {
    this.resetKpiForm();
    this.ngxSmartModalService.getModal('myModal').close();
  }

  resetKpiForm() {
    this.userForm.reset();
    this.userForm.patchValue({
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: ''
    });
  }

}
