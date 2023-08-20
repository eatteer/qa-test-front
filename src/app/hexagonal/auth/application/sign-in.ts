import { SignInCredential } from '../domain/sign-in/sign-in-credential';
import { SignInRepository } from '../domain/sign-in/sign-in.repository';

export class SignIn {
  public constructor(private readonly signInRepository: SignInRepository) {}

  public signIn(signInCredential: SignInCredential): void {
    this.signInRepository.signIn(signInCredential);
  }
}
