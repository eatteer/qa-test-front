import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserFullName } from '@core/user/domain/user-full-name';

export function ValidateFullName(): ValidatorFn {
  return (formControl: AbstractControl): ValidationErrors | null => {
    const fullName = formControl.value;

    if (!UserFullName.isValid(fullName)) {
      return { fullName: true };
    }

    return null;
  };
}
