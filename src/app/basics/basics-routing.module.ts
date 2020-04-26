import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './components/basics/basics.component';


const routes: Routes = [ {
  path: '',
  component: BasicsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
