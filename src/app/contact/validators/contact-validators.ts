import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserListService } from '../user-list.service';
import { map } from 'rxjs/operators';

export class ContactValidators {
  constructor(
    private userListService: UserListService
  ) {
  }

  static isUserNando(control: AbstractControl): ValidationErrors | null {
    const USER = 'nando';
    const ERROR = { isUserNando: true };
    return control.value.indexOf(USER) !== -1 ? null : ERROR;
  }

  isBannedUser = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const ERROR = { isBannedUser: true };
    return this.userListService.getBannedUsers().pipe(
      map((users: string[]) => users.indexOf(control.value) !== -1),
      map((isInvalid: boolean) => isInvalid ? ERROR : null)
    );
  }
}
