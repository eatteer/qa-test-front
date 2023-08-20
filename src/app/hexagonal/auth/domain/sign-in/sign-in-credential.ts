import { CredentialEmail } from '../credential-email';
import { CredentialPassword } from '../credential-password';

export class SignInCredential {
  public constructor(
    public readonly email: CredentialEmail,
    public readonly password: CredentialPassword
  ) {}
}
