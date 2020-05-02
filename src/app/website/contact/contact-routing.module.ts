import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUserFormComponent } from '@contact/components/contact-user-form/contact-user-form.component';


const routes: Routes = [{
  path: '',
  component: ContactUserFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
