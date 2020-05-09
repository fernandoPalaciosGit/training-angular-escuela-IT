import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthTokenService implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, nextInterceptor: HttpHandler): Observable<HttpEvent<any>> {
    const headers = request.headers.set('Authorization', `Basic ${ btoa('username:password') }`);
    const requestWithAuth = request.clone({ headers });
    return nextInterceptor.handle(requestWithAuth);
  }
}
