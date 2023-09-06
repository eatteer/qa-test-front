import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SessionRepository = new InjectionToken<SessionRepository>(
  'SessionRepository'
);

export interface SessionRepository {
  logout(): Observable<void>;
}
