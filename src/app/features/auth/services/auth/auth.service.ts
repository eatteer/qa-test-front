import { Injectable } from '@angular/core';
import { SignUpCredentials } from '../../types/sign-up-credentials.interface';
import { SignInCredentials } from '../../types/sign-in-credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public signIn(signInCredentials: SignInCredentials): void {
    console.log(signInCredentials);
  }

  public signUp(signUpCredentials: SignUpCredentials): void {
    console.log(signUpCredentials);
  }
}
