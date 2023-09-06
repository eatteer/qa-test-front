import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

// Domain
import { Session } from '../../session/domain/session.model';
import { SignInCredential } from './models/sign-in-credential/sign-in-credential.model';
import { SignUpCredential } from './models/sign-up-credential/sign-up-credential.model';

export const AuthRepository = new InjectionToken<AuthRepository>(
  'AuthRepository'
);

export interface AuthRepository {
  signIn(signInCredential: SignInCredential): Observable<Session>;
  signUp(signUpCredential: SignUpCredential): Observable<void>;
}
