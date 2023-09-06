import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// Environment
import { environment } from 'src/environments/environment';

// Domain
import { AuthRepository } from '../domain/auth.repository';
import { Session } from '../../session/domain/session.model';
import { SessionPrimitive } from '../../session/domain/session.primitive';
import { SignInCredential } from '../domain/models/sign-in-credential/sign-in-credential.model';
import { SignUpCredential } from '../domain/models/sign-up-credential/sign-up-credential.model';

@Injectable()
export class ApiAuthRepository implements AuthRepository {
  private readonly API_URL = environment.API_URL;
  private readonly SIGN_IN_URL = `${this.API_URL}/login`;
  private readonly SIGN_UP_URL = `${this.API_URL}/register`;

  public constructor(private readonly httpClient: HttpClient) {}

  public signIn(signInCredential: SignInCredential): Observable<Session> {
    return this.httpClient
      .post<SessionPrimitive>(this.SIGN_IN_URL, signInCredential.toPrimitive())
      .pipe(map(Session.fromPrimitive));
  }

  public signUp(signUpCredential: SignUpCredential): Observable<void> {
    return this.httpClient.post<void>(
      this.SIGN_UP_URL,
      signUpCredential.toPrimitive()
    );
  }
}
