import { validatePassword } from './validate-password';

export class CredentialPassword {
  public constructor(public readonly value: string) {
    if (!CredentialPassword.isValid(value)) {
      throw new Error('Invalid password');
    }
  }

  public static isValid(password: string): boolean {
    return validatePassword(password);
  }
}
