import { Pipe, PipeTransform } from '@angular/core';
// @ts-ignore
import * as moment from 'moment';
import 'moment/locale/es';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {
  constructor() {
    moment().locale('es');
  }

  transform(date: Date, args: string): unknown {
    return moment(date).format(args);
  }
}
