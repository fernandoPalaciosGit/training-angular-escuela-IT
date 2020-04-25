import { FibonacciNumberPipe } from './fibonacci-number.pipe';

describe('FibonacciNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FibonacciNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
