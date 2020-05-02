import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { FibonacciNumberPipe } from './pipes/fibonacci-number.pipe';
import { HighlightDirective } from '@shares/directives/highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonParseStringPipe } from '@shares/pipes/json-parse-string.pipe';

@NgModule({
  declarations: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective,
    NotFoundComponent,
    JsonParseStringPipe
  ],
  exports: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective,
    FormsModule,
    ReactiveFormsModule,
    JsonParseStringPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
