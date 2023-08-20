import { SignUpCredential } from './sign-up-credential';

export interface SignUpRepository {
  signUp(signUpCredential: SignUpCredential): void;
}
