import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartProductListComponent } from './components/cart-product-list/cart-product-list.component';


const routes: Routes = [{
  path: '',
  component: CartProductListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
