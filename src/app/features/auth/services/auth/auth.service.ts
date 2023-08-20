import { Injectable } from '@angular/core';
import { SignInCredential } from 'src/app/hexagonal/auth/domain/sign-in/sign-in-credential';
import { SignUpCredential } from 'src/app/hexagonal/auth/domain/sign-up/sign-up-credential';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public signIn(signInCredential: SignInCredential): void {
    console.log(signInCredential);
  }

  public signUp(signUpCredential: SignUpCredential): void {
    console.log(signUpCredential);
  }
}
