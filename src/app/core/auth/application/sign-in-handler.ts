import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Domain
import { AuthRepository } from '../domain/auth.repository';
import { Session } from '@core/session/domain/session.model';
import { SignInCredential } from '../domain/models/sign-in-credential/sign-in-credential.model';

// Modules
import { AuthModule } from 'src/app/features/auth/auth.module';

@Injectable({ providedIn: AuthModule })
export class SignInHandler {
  public constructor(private readonly authRepository: AuthRepository) {}

  public signIn(signInCredential: SignInCredential): Observable<Session> {
    return this.authRepository.signIn(signInCredential);
  }
}
