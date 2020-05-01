import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ListComponent } from '@product-user-list/components/list/list.component';
import { ProductDetailsComponent } from '@product-user-list/components/product-details/product-details.component';
import { ProductNewComponent } from '@product-user-list/components/product-new/product-new.component';

const routes: Routes = [{
  path: 'users',
  component: ListComponent
}, {
  path: 'products',
  component: ItemListComponent
}, {
  path: 'products/new',
  component: ProductNewComponent
}, {
  path: 'products/:id',
  component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductUserListRoutingModule {
}
