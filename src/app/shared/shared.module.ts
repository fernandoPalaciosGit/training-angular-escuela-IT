import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { FibonacciNumberPipe } from './pipes/fibonacci-number.pipe';

@NgModule({
  declarations: [
    DateformatPipe,
    FibonacciNumberPipe
  ],
  exports: [
    DateformatPipe,
    FibonacciNumberPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
