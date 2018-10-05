import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    TopicsRoutingModule,
    PageHeaderModule
  ],
  declarations: [TopicsComponent]
})
export class TopicsModule { }
