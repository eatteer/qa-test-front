import { SignUpCredential } from '../domain/sign-up/sign-up-credential';
import { SignUpRepository } from '../domain/sign-up/sign-up.repository';

export class SignUp {
  public constructor(private readonly signUpRepository: SignUpRepository) {}

  public signUp(signUpCredential: SignUpCredential): void {
    this.signUpRepository.signUp(signUpCredential);
  }
}
