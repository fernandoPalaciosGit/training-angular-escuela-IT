import { Pipe, PipeTransform } from '@angular/core';
import { AlgorithmService } from '../services/algorithm.service';

@Pipe({
  name: 'fibonacciNumber'
})
export class FibonacciNumberPipe implements PipeTransform {
  constructor(private algorithm: AlgorithmService) {
  }

  transform(num: number): unknown {
    return this.algorithm.getFibonacciNumber(num);
  }
}
