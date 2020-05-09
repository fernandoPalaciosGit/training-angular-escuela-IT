import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAuthTokenService } from '@authentication/interceptors/http-auth-token.service';

export const httpInterceptorServiceList = [{
  provide: HTTP_INTERCEPTORS,
  useClass: HttpAuthTokenService,
  multi: true // que forma parte de una secuencia de interceptores
}];
