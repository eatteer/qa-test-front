import { Observable, of } from 'rxjs';
import { SessionRepository } from '../domain/session.repository';

export class ApiSessionRepository implements SessionRepository {
  public logout(): Observable<void> {
    return of(undefined);
  }
}
