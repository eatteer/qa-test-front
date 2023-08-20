import { SignInCredential } from '../domain/sign-in/sign-in-credential';
import { SignInRepository } from '../domain/sign-in/sign-in.repository';

export class ApiSignInRepository implements SignInRepository {
  public signIn(signInCredential: SignInCredential): void {}
}
