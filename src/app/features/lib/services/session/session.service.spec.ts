import { TestBed } from '@angular/core/testing';
import { SessionRepository } from '@core/session/domain/session.repository';
import { SessionService } from './session.service';

const sessionRepositoryMock = jasmine.createSpyObj<SessionRepository>(
  'SessionRepository',
  ['logout']
);

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SessionRepository, useValue: sessionRepositoryMock },
      ],
    });
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
