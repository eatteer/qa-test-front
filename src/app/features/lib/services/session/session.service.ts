import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

// Infrastructure
import { SESSION_STORAGE_KEY } from '@core/session/infrastructure/constants/session-storage-key.constant';

// Domain
import { LocalStorageRepository } from '@core/shared/domain/local-storage.repository';
import { NotAuthenticatedError } from '@core/session/domain/errors/not-authenticated-error';
import { Session } from '@core/session/domain/session.model';
import { User } from '@core/user/domain/user.model';

// Application
import { LogoutHandler } from '@core/session/application/logout-handler';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private session: Session | null = null;

  public constructor(
    private readonly logoutHandler: LogoutHandler,
    private readonly localStorageRepository: LocalStorageRepository
  ) {}

  /** @throws NotAuthenticatedError is {@link session} is null. */
  public getSession(): Session {
    if (!this.session) throw new NotAuthenticatedError();
    return this.session;
  }

  public getUser(): User {
    const auth = this.getSession();
    return auth.user;
  }

  public authenticate(session: Session): void {
    this.session = session;
    this.localStorageRepository.set(SESSION_STORAGE_KEY, session.toPrimitive());
  }

  public deauthenticate(): Observable<void> {
    return this.logoutHandler.logout().pipe(
      tap(() => {
        this.session = null;
        this.localStorageRepository.remove(SESSION_STORAGE_KEY);
      })
    );
  }
}
