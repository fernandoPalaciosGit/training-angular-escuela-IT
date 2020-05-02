import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shares/material.module';
import { SharedModule } from '@shares/shared.module';
import { AuthenticationRoutingModule } from '@authentication/authentication-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthenticationModule {
}
