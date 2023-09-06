import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Domain
import { UserPassword } from '@core/user/domain/user-password';

export function ValidatePassword(): ValidatorFn {
  return (formControl: AbstractControl): ValidationErrors | null => {
    const password = formControl.value;

    if (!UserPassword.isValid(password)) {
      return { password: 'true' };
    }

    return null;
  };
}
