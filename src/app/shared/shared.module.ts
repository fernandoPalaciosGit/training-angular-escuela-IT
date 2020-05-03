import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { FibonacciNumberPipe } from './pipes/fibonacci-number.pipe';
import { HighlightDirective } from '@shares/directives/highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonParseStringPipe } from '@shares/pipes/json-parse-string.pipe';
import { PrintErrorFormPipe } from '@shares/pipes/print-error-form.pipe';

@NgModule({
  declarations: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective,
    NotFoundComponent,
    JsonParseStringPipe,
    PrintErrorFormPipe
  ],
  exports: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective,
    FormsModule,
    ReactiveFormsModule,
    JsonParseStringPipe,
    PrintErrorFormPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
