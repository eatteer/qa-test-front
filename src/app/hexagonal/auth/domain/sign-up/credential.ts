import { CredentialEmail } from '../credential-email';
import { CredentialPassword } from '../credential-password';

export class Credential {
  public constructor(
    public readonly credentialsEmail: CredentialEmail,
    public readonly credentialsPassword: CredentialPassword
  ) {}
}
