import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor() {
  }

  getFibonacciNumber(num: number) {
    return num <= 1 ? 1
      : this.getFibonacciNumber(num - 1) + this.getFibonacciNumber(num - 2);
  }
}
