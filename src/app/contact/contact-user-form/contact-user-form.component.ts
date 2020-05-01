import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { debounce, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-user-form',
  templateUrl: './contact-user-form.component.html',
  styleUrls: ['./contact-user-form.component.scss']
})
export class ContactUserFormComponent implements OnInit {
  readonly placeHolderEmail: string = '@gmail';
  userEmail: FormControl;
  userEmailData$: Observable<string>;

  constructor() {
  }

  ngOnInit(): void {
    this.initEmail();
  }

  private initEmail() {
    const validations = [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15),
      Validators.email,
    ];
    // this.userEmail = new FormControl(this.placeHolderEmail, validations);// con un valor inicial
    this.userEmail = new FormControl('', validations);
    this.userEmailData$ = this.userEmail.valueChanges; // Aquí tenemos una referencia del enlace de datos
    this.userEmailData$
      .pipe(debounceTime(350))
      .subscribe(this.sendEmailRequestToServer.bind(this)); // nos suscribimos a los cambios del enlace de datos
  }

  private sendEmailRequestToServer(emailData) {
    console.info(this.userEmail.valid, emailData.length);
  }
}
