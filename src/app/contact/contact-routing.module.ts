import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contact.module';
import { ContactUserFormComponent } from './contact-user-form/contact-user-form.component';


const routes: Routes = [{
  path: '',
  component: ContactUserFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
