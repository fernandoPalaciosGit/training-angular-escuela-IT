import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Pipe({
  name: 'printErrorForm',
  pure: false
})
export class PrintErrorFormPipe implements PipeTransform {

  transform(form: FormGroup, ...args: unknown[]): Validators {
    return Object.keys(form.controls)
      .map((controlName) => {
        const errors = form.controls[controlName].errors;
        return errors !== null ? { [controlName]: errors } : null;
      })
      .concat(form.errors || null)
      .filter((errors) => errors !== null);
  }
}
