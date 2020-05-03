import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthError } from '@authentication/services/aut-error';
import { AuthenticationService } from '@authentication/services/authentication.service';
import { LocalTraceService } from '@shares/services/local-trace.service';
import UserCredential = firebase.auth.UserCredential;
import { TranslateKeysService } from '@shares/services/translate-keys.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private localTraceService: LocalTraceService,
    private translate: TranslateKeysService,
    private router: Router,
    private matSnackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // form control validators
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.authenticationService.signIn(this.email.value, this.password.value)
      .then((result) => this.localTraceService.logInfo(this, result))
      .then(this.manageRegisterAction.bind(this));
  }

  manageRegisterAction(response: UserCredential | AuthError) {
    if (response instanceof AuthError) {
      this.translate.getMessage('errors', response.code).subscribe((text) => {
        this.matSnackBar.open(text, 'Undo', {
          duration: 3000
        });
      });
    } else {
      this.router.navigate(['admin']);
    }
  }
}
