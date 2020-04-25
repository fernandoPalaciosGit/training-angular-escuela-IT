import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { ListComponent } from './list/list.component';
import { FibonacciNumberPipe } from './pipes/fibonacci-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DateformatPipe,
    ListComponent,
    FibonacciNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
