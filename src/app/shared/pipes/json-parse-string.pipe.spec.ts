import { JsonParseStringPipe } from './json-parse-string.pipe';

describe('JsonParseStringPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonParseStringPipe();
    expect(pipe).toBeTruthy();
  });
});
