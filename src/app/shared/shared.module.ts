import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { FibonacciNumberPipe } from './pipes/fibonacci-number.pipe';
import { HighlightDirective } from '@shares/directives/highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonParseStringPipe } from '@shares/pipes/json-parse-string.pipe';
import { PrintErrorFormPipe } from '@shares/pipes/print-error-form.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorServiceList } from '@core/http-interceptors';

@NgModule({
  declarations: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective,
    NotFoundComponent,
    JsonParseStringPipe,
    PrintErrorFormPipe
  ],
  providers: [
    httpInterceptorServiceList
  ],
  exports: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective,
    FormsModule,
    ReactiveFormsModule,
    JsonParseStringPipe,
    PrintErrorFormPipe,
    TranslateModule,
    HttpClientModule,
    CommonModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
