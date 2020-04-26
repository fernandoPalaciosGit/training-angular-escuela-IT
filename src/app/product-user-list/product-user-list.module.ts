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

@NgModule({
  declarations: [
    ItemListComponent,
    ProductComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductUserListRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProductService,
    UsersService
  ]
})
export class ProductUserListModule {
}
