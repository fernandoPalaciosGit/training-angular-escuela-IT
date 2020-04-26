import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from '@basics/components/basics/basics.component';
import { BasicsRoutingModule } from '@basics/basics-routing.module';
import { SharedModule } from '@shares/shared.module';

@NgModule({
  declarations: [
    BasicsComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    SharedModule
  ]
})
export class BasicsModule {
}
