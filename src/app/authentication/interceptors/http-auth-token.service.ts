import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthTokenService implements HttpInterceptor {
  constructor() {
  }

  // MIDDLEWARE of HttpClient
  intercept(lastRequest: HttpRequest<any>, nextInterceptor: HttpHandler): Observable<HttpEvent<any>> {
    console.info('--------transform ${lastRequest}----');
    return nextInterceptor.handle(lastRequest);
  }
}
