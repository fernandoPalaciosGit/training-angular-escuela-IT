import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalTraceService {

  constructor() {
  }

  logInfo(context: any, result: any) {
    if (isDevMode()) {
      console.info(
        context.name || this?.constructor?.name,
        '<--->',
        JSON.stringify(result, null, '\t')
      );
    }
    return result;
  }
}
