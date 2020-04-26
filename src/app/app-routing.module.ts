import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'todo-list',
  loadChildren: () => import('./todo-list/todo-list.module')
    .then((module) => module.TodoListModule)
}, {
  path: 'product-user-list',
  loadChildren: () => import('./product-user-list/product-user-list.module')
    .then((module) => module.ProductUserListModule)
}, {
  path: 'basics',
  loadChildren: () => import('./basics/basics.module')
    .then((module) => module.BasicsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
