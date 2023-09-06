import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

// Constants
import { SIGN_IN_ROUTE } from '@lib/config/routing/routes';

// Domain
import { NotAuthenticatedError } from '@core/session/domain/errors/not-authenticated-error';

// Services
import { SessionService } from '@features/lib/services/session/session.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor(
    private readonly router: Router,
    private readonly sessionService: SessionService
  ) {}

  public handleError(error: unknown): void {
    if (error instanceof NotAuthenticatedError) {
      alert('Your session has expired. Please sign in again');
      this.sessionService
        .deauthenticate()
        .pipe(tap((_) => this.router.navigate([SIGN_IN_ROUTE.rootPath])))
        .subscribe();
    }

    console.warn('Error caught by GlobalErrorHandler: ', error);
  }
}
