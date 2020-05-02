import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonParseString'
})
export class JsonParseStringPipe implements PipeTransform {

  transform(json: {}, ...args: unknown[]): unknown {
    return JSON.stringify(json, null, '\t');
  }
}
