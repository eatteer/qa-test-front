import { ComponentFixture, TestBed } from '@angular/core/testing';

// Domain
import { User } from '@core/user/domain/user.model';
import { UserPrimitive } from '@core/user/domain/user.primitive';
import { SessionRepository } from '@core/session/domain/session.repository';

// Cmponents
import { NavbarComponent } from './navbar.component';

// Services
import { SessionService } from '@features/lib/services/session/session.service';

const mockUserPrimive: UserPrimitive = {
  id: '29',
  fullName: 'John Doe',
  email: 'joendoe@gmail.com',
};

const sessionRepositoryMock = jasmine.createSpyObj<SessionRepository>(
  'SessionRepository',
  ['logout']
);

const sessionServiceMock = jasmine.createSpyObj<SessionService>(
  'SessionService',
  ['getUser']
);

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: SessionRepository, useValue: sessionRepositoryMock },
        { provide: SessionService, useValue: sessionServiceMock },
      ],
    });

    sessionServiceMock.getUser.and.returnValue(
      User.fromPrimitive(mockUserPrimive)
    );

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
