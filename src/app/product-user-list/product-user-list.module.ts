import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductUserListRoutingModule } from './product-user-list-routing.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DateformatPipe } from '../shared/pipes/dateformat.pipe';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ItemListComponent,
    ProductComponent,
    ListComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    ProductUserListRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProductUserListModule { }
