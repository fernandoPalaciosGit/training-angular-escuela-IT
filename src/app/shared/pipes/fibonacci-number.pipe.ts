import { Pipe, PipeTransform } from '@angular/core';
import { AlgorithmService } from '@shares/services/algorithm.service';

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
