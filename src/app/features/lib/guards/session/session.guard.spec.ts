import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { sessionGuard } from './session.guard';

describe('sessionGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => sessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
