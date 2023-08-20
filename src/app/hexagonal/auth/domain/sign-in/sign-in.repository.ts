import { SignInCredential } from './sign-in-credential';

export interface SignInRepository {
  signIn(signInCredential: SignInCredential): void;
}
