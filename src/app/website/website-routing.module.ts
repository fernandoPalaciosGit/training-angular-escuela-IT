import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutWebsiteComponent } from './shared/components/layout-website/layout-website.component';


const routes: Routes = [{
  path: '',
  component: LayoutWebsiteComponent,
  children: [{
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  }, {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todo-list.module')
      .then((module) => module.TodoListModule)
  }, {
    path: 'item-list',
    loadChildren: () => import('./product-user-list/product-user-list.module')
      .then((module) => module.ProductUserListModule)
  }, {
    path: 'basics',
    loadChildren: () => import('./basics/basics.module')
      .then((module) => module.BasicsModule)
  }, {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module')
      .then((module) => module.ContactModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {
}
