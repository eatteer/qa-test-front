import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CredentialPassword } from 'src/app/hexagonal/auth/domain/credential-password';

export function ValidatePassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (!CredentialPassword.isValid(password)) {
      return { password: true };
    }

    return null;
  };
}
