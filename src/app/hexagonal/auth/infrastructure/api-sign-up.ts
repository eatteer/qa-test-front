import { SignUpCredential } from '../domain/sign-up/sign-up-credential';
import { SignUpRepository } from '../domain/sign-up/sign-up.repository';

export class ApiSignUpRepository implements SignUpRepository {
  public signUp(signUpCredential: SignUpCredential): void {}
}
