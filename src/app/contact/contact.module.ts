import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUserFormComponent } from './contact-user-form/contact-user-form.component';
import { SharedModule } from '@shares/shared.module';


@NgModule({
  declarations: [ContactUserFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
})
export class ContactModule { }
