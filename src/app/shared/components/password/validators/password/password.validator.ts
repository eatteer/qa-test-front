import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { validatePassword } from 'src/app/hexagonal/auth/domain/validate-password';

export function ValidatePassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    const isValid = validatePassword(password);

    if (!isValid) {
      return { password: true };
    }

    return null;
  };
}
