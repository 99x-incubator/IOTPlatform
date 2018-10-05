import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from '../../shared';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    PageHeaderModule,
    NgxSmartModalModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [UsersComponent],
  providers: [NgxSmartModalService]
})
export class UsersModule { }
