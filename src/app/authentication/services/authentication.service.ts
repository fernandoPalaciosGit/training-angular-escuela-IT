import { Injectable, isDevMode } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { map } from 'rxjs/operators';
import { AutErrorService, AuthError } from '@authentication/services/aut-error';
import { LocalTraceService } from '@shares/services/local-trace.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private localTraceService: LocalTraceService
  ) {
  }

  signIn(email: string, password: string): Promise<UserCredential | AuthError> {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => this.localTraceService.logInfo(this, result))
      .catch(({ code, message }) => AutErrorService.getLoginError(code));
  }

  signOut(): Promise<void> {
    return this.firebaseAuth.signOut();
  }

  register(email: string, password: string): Promise<UserCredential | AuthError> {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => this.localTraceService.logInfo(this, result))
      .catch(({ code, message }) => AutErrorService.getRegisterError(code));
  }

  hasSession(): Observable<boolean> {
    return this.firebaseAuth.authState.pipe(
      map((user: User | null) => user !== null)
    );
  }
}
