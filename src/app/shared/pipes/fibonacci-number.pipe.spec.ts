import { FibonacciNumberPipe } from './fibonacci-number.pipe';
import { AlgorithmService } from '../services/algorithm.service';

describe('FibonacciNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FibonacciNumberPipe(new AlgorithmService());
    expect(pipe).toBeTruthy();
  });
});
