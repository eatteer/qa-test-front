import { SessionRepository } from '../domain/session.repository';

export class ApiSessionRepository implements SessionRepository {
  public logout(): void {}
}
