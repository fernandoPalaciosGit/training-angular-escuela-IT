import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shares/material.module';
import { SharedModule } from '@shares/shared.module';
import { AuthenticationRoutingModule } from '@authentication/authentication-routing.module';
import { LoginComponent } from '@authentication/components/login/login.component';
import { RegisterComponent } from '@authentication/components/register/register.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthenticationModule {
}
