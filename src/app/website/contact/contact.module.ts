import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '@shares/shared.module';
import { ContactUserFormComponent } from '@contact/components/contact-user-form/contact-user-form.component';
import { MaterialModule } from '@shares/material.module';


@NgModule({
  declarations: [ContactUserFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    MaterialModule
  ],
})
export class ContactModule { }
