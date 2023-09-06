import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Infrastucture
import { ApiError } from '@core/shared/infrastructure/api-error.interface';

// Application
import { SignInHandler } from '@core/auth/application/sign-in-handler';

// Domain
import { Session } from '@core/session/domain/session.model';
import { SignInCredential } from '@core/auth/domain/models/sign-in-credential/sign-in-credential.model';

// Constants
import { SIGN_UP_ROUTE } from '@lib/config/routing/routes';

// Types
import { SignInForm } from './types/sign-in-form.type';

// Validators
import { ValidatePassword } from '@features/lib/components/password/validators/password.validator';

// Services
import { SessionService } from '@features/lib/services/session/session.service';
import { ToastsService } from '@features/lib/library/toasts/services/toasts/toasts.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent {
  public SIGN_UP_ROUTE = SIGN_UP_ROUTE;

  public signInForm!: SignInForm;

  public constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private readonly signInHandler: SignInHandler,
    private readonly sessionService: SessionService,
    private readonly toastsService: ToastsService
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, ValidatePassword()]],
    });
  }

  public signIn(): void {
    const { email, password } = this.signInForm.getRawValue();

    const signInCredential = SignInCredential.fromPrimitive({
      email,
      password,
    });
    
    this.signInHandler.signIn(signInCredential).subscribe({
      next: (session: Session) => {
        this.sessionService.authenticate(session);
        this.router.navigate(['/panel']);
      },
      error: (httpError: HttpErrorResponse) => {
        const apiError: ApiError = httpError.error;
        this.toastsService.open({
          variant: 'error',
          message: apiError.message,
        });
      },
    });
  }
}
