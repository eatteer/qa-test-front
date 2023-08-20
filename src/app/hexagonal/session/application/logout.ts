import { SessionRepository } from '../domain/session.repository';

export class ApiSession {
  public constructor(private readonly sessionRepository: SessionRepository) {}

  public logout(): void {
    this.sessionRepository.logout();
  }
}
