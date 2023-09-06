export class UserFullName {
  public static FULLNAME_REGEX = /\b\w+\b.*\b\w+\b/;

  public constructor(public readonly value: string) {
    if (!UserFullName.isValid(value)) {
      throw new Error(UserFullName.getInvalidMessage());
    }
  }

  public static isValid(fullName: string): boolean {
    return this.FULLNAME_REGEX.test(fullName);
  }

  public static getInvalidMessage(): string {
    return 'Full name must contain at least two words';
  }
}
