import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { NotFoundComponent } from '@shares/components/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'todo-list',
  pathMatch: 'full'
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
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
