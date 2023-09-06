import { SignInCredentialPrimitive } from './sign-in-credential.primitive';
import { UserEmail } from 'src/app/core/user/domain/user-email';
import { UserPassword } from 'src/app/core/user/domain/user-password';

export class SignInCredential {
  private constructor(
    public readonly email: UserEmail,
    public readonly password: UserPassword
  ) {}

  public static fromPrimitive({
    email,
    password,
  }: SignInCredentialPrimitive): SignInCredential {
    return new SignInCredential(
      new UserEmail(email),
      new UserPassword(password)
    );
  }

  public toPrimitive(): SignInCredentialPrimitive {
    return {
      email: this.email.value,
      password: this.password.value,
    };
  }
}
