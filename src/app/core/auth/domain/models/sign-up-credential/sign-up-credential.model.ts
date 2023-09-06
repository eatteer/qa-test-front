import { UserFullName } from 'src/app/core/user/domain/user-full-name';
import { SignUpCredentialPrimitive } from './sign-up-credential.primitive';
import { UserPassword } from 'src/app/core/user/domain/user-password';
import { UserEmail } from 'src/app/core/user/domain/user-email';

export class SignUpCredential {
  private constructor(
    public readonly fullName: UserFullName,
    public readonly email: UserEmail,
    public readonly password: UserPassword
  ) {}

  public static fromPrimitive({
    fullName,
    email,
    password,
  }: SignUpCredentialPrimitive): SignUpCredential {
    return new SignUpCredential(
      new UserFullName(fullName),
      new UserEmail(email),
      new UserPassword(password)
    );
  }

  public toPrimitive(): SignUpCredentialPrimitive {
    return {
      fullName: this.fullName.value,
      email: this.email.value,
      password: this.password.value,
    };
  }
}
