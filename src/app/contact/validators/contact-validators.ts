import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ContactValidators {
  static isUserNando(control: AbstractControl): ValidationErrors | null {
    const USER = 'nando';
    const ERROR = { isUserNando: true };
    return control.value.indexOf(USER) !== -1 ? null : ERROR;
  }
}
