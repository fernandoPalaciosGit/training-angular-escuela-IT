import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ListComponent } from '@product-user-list/components/list/list.component';
import { ProductDetailsComponent } from '@product-user-list/components/product-details/product-details.component';

const routes: Routes = [{
  path: 'products',
  component: ItemListComponent
}, {
  path: 'users',
  component: ListComponent
} , {
  path: ':id',
  component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductUserListRoutingModule { }
