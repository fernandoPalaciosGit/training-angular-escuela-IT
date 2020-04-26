import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { FibonacciNumberPipe } from './pipes/fibonacci-number.pipe';
import { HighlightDirective } from '@shares/directives/highlight.directive';

@NgModule({
  declarations: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective
  ],
  exports: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
