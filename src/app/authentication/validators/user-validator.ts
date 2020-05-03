import { FormGroup, ValidationErrors } from '@angular/forms';

export class UserValidator {
  static isSamePasswordValue(group: FormGroup): ValidationErrors | null {
    const pass = group.controls.password;
    const confirmPass = group.controls.confirmPassword;

    const ERROR = { samePasswordValue: true };
    return pass.value !== confirmPass.value ? ERROR : null;
  }
}
