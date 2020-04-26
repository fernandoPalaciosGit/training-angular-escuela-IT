import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { BasicsComponent } from './components/basics/basics.component';
import { DateformatPipe } from '../shared/pipes/dateformat.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BasicsComponent,
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    SharedModule
  ]
})
export class BasicsModule { }
