import { CredentialEmail } from '../credential-email';
import { CredentialPassword } from '../credential-password';

export class SignUpCredential {
  public constructor(
    public readonly email: CredentialEmail,
    public readonly password: CredentialPassword,
    public readonly confirmPassword: CredentialPassword
  ) {}
}
