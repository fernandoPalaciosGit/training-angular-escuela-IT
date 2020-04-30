import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { FibonacciNumberPipe } from './pipes/fibonacci-number.pipe';
import { HighlightDirective } from '@shares/directives/highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    DateformatPipe,
    FibonacciNumberPipe,
    HighlightDirective,
    NotFoundComponent
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
