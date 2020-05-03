import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@authentication/services/authentication.service';
import { tap } from 'rxjs/operators';

// también tiene que ser de accesibilidad 'root' porque se va a utilizar para comprobar el usuario logged desde el area de website
@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  redirectToLogin(isLogged) {
    if (!isLogged) {
      this.router.navigate(['authentication/login']);
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // por defecto canActivate() si devuelve false -> redirecciona a la home
    // pipe()->tap() para actuar antes de que se resulva la suscripcion del observaable en el router de areas: canActivate: [UserLoggedGuard],
    return this.authenticationService.hasSession().pipe(
      tap(this.redirectToLogin.bind(this))
    );
  }
}
