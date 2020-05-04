import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserListService } from '../user-list.service';
import { map } from 'rxjs/operators';

export class ContactValidators {
  constructor() {
  }

  static isUserNando(control: AbstractControl): ValidationErrors | null {
    const USER = 'nando';
    const ERROR = { isUserNando: true };
    return control.value.indexOf(USER) !== -1 ? null : ERROR;
  }

  static isBannedUser(userListService: UserListService) {
    const ERROR = { isBannedUser: true };
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userListService.isBannedUser(control.value).pipe(
        map((isInvalid: boolean) => isInvalid ? ERROR : null)
      );
    };
  }
}
