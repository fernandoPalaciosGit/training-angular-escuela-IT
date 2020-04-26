import { FibonacciNumberPipe } from '@shares/pipes/fibonacci-number.pipe';
import { AlgorithmService } from '@shares/services/algorithm.service';

describe('FibonacciNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FibonacciNumberPipe(new AlgorithmService());
    expect(pipe).toBeTruthy();
  });
});
