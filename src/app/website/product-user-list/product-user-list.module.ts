import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from '@product-user-list/components/item-list/item-list.component';
import { ProductComponent } from '@product-user-list/components/product/product.component';
import { ListComponent } from '@product-user-list/components/list/list.component';
import { ProductUserListRoutingModule } from '@product-user-list/product-user-list-routing.module';
import { SharedModule } from '@shares/shared.module';
import { UsersService } from '@product-user-list/services/users.service';
import { ProductService } from '@product-user-list/services/product.service';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MaterialModule } from '@shares/material.module';
import { SelectProductService } from '@product-user-list/services/select-product.service';

@NgModule({
  declarations: [
    ItemListComponent,
    ProductComponent,
    ListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductUserListRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    ProductListApiService,
    ProductService,
    UsersService,
    SelectProductService
  ]
})
export class ProductUserListModule {
}
