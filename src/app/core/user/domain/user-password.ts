export class UserPassword {
  /**
   * Validate at least:
   * - One lowercase
   * - One uppercase
   * - One digit
   * - Maximum 13 characters
   * x Minimum 8 characters
   * x One special character
   */
  public static PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,13}$/;

  public constructor(public readonly value: string) {
    if (!UserPassword.isValid(value)) {
      throw new Error(UserPassword.getInvalidMessage());
    }
  }

  public static isValid(password: string): boolean {
    return UserPassword.PASSWORD_REGEX.test(password);
  }

  public static getInvalidMessage(): string {
    return 'Password must contain at least one lowercase letter, one uppercase letter, one number and maximum 13 characters.';
  }
}
