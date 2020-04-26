import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from '@product-user-list/components/item-list/item-list.component';
import { ProductComponent } from '@product-user-list/components/product/product.component';
import { ListComponent } from '@product-user-list/components/list/list.component';
import { ProductUserListRoutingModule } from '@product-user-list/product-user-list-routing.module';
import { SharedModule } from '@shares/shared.module';

@NgModule({
  declarations: [
    ItemListComponent,
    ProductComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ProductUserListRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProductUserListModule {
}
