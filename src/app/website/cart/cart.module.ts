import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { CartProductListComponent } from './components/cart-product-list/cart-product-list.component';
import { SharedModule } from '@shares/shared.module';

@NgModule({
  declarations: [CartProductListComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
