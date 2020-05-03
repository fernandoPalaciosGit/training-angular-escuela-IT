import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalTraceService } from '@shares/services/local-trace.service';

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
    private localTraceService: LocalTraceService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', []]
    });
  }

  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.registerForm.get('confirmPassword');
  }

  onSubmit() {
    alert(this.localTraceService.logInfo(this, this.registerForm.value));
  }
}
