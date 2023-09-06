import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { of } from 'rxjs';

// Domain
import { LocalStorageRepository } from '@core/shared/domain/local-storage.repository';
import { Session } from '@core/session/domain/session.model';
import { SessionPrimitive } from '@core/session/domain/session.primitive';
import { SESSION_STORAGE_KEY } from '@core/session/infrastructure/constants/session-storage-key.constant';

// Constants
import { SIGN_IN_ROUTE } from '@lib/config/routing/routes';

// Services
import { SessionService } from '@features/lib/services/session/session.service';

/** Check if the user has a session/is authenticated */
export const sessionGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  const localStorageRepository = inject(LocalStorageRepository);
  const sessionService = inject(SessionService);

  const sessionPrimitive =
    localStorageRepository.get<SessionPrimitive>(SESSION_STORAGE_KEY);

  if (sessionPrimitive) {
    const session = Session.fromPrimitive(sessionPrimitive);
    sessionService.authenticate(session);

    return of(true);
  }

  return router.createUrlTree([SIGN_IN_ROUTE.rootPath]);
};
