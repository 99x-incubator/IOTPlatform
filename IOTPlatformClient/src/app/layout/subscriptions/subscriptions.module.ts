import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ],
  declarations: [SubscriptionsComponent]
})
export class SubscriptionsModule { }
