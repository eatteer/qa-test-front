import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionRepository } from '../domain/session.repository';

@Injectable({ providedIn: 'root' })
export class LogoutHandler {
  public constructor(private readonly sessionRepository: SessionRepository) {}

  public logout(): Observable<void> {
    return this.sessionRepository.logout();
  }
}
