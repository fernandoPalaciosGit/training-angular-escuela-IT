import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalTraceService } from '@shares/services/local-trace.service';
import { UserValidator } from '@authentication/validators/user-validator';
import { AuthenticationService } from '@authentication/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private localTraceService: LocalTraceService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      // form control validators
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
      // form group validators
    }, { validators: [UserValidator.isSamePasswordValue] });
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  onSubmit() {
    this.authenticationService.register(this.email.value, this.password.value)
      .then((result) => this.localTraceService.logInfo(this, result));
  }
}
