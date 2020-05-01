import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from '@basics/components/basics/basics.component';
import { BasicsRoutingModule } from '@basics/basics-routing.module';
import { SharedModule } from '@shares/shared.module';
import { MaterialModule } from '@shares/material.module';

@NgModule({
  declarations: [
    BasicsComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class BasicsModule {
}
