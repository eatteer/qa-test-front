import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Domain
import { AuthRepository } from '../domain/auth.repository';
import { SignUpCredential } from '../domain/models/sign-up-credential/sign-up-credential.model';

// Modules
import { AuthModule } from '@features/auth/auth.module';

@Injectable({ providedIn: AuthModule })
export class SignUpHandler {
  public constructor(private readonly authRepository: AuthRepository) {}

  public signUp(signUpCredential: SignUpCredential): Observable<void> {
    return this.authRepository.signUp(signUpCredential);
  }
}
