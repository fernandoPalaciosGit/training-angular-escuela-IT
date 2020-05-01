import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from '@product-user-list/components/item-list/item-list.component';
import { ProductComponent } from '@product-user-list/components/product/product.component';
import { ListComponent } from '@product-user-list/components/list/list.component';
import { ProductUserListRoutingModule } from '@product-user-list/product-user-list-routing.module';
import { SharedModule } from '@shares/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '@product-user-list/services/users.service';
import { ProductService } from '@product-user-list/services/product.service';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductNewComponent } from './components/product-new/product-new.component';

@NgModule({
  declarations: [
    ItemListComponent,
    ProductComponent,
    ListComponent,
    ProductDetailsComponent,
    ProductNewComponent
  ],
  imports: [
    CommonModule,
    ProductUserListRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProductListApiService,
    ProductService,
    UsersService
  ]
})
export class ProductUserListModule {
}
