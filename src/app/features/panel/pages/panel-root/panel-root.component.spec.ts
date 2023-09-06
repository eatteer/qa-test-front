import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Domain
import { SessionRepository } from '@core/session/domain/session.repository';
import { User } from '@core/user/domain/user.model';
import { UserPrimitive } from '@core/user/domain/user.primitive';

// Components
import { PanelRootComponent } from './panel-root.component';

// Services
import { SessionService } from '@features/lib/services/session/session.service';

// Modules
import { NavbarModule } from '@features/lib/components/navbar/navbar.module';

const userPrimiveMock: UserPrimitive = {
  id: '29',
  fullName: 'John Doe',
  email: 'jonhdoe@gmail.com',
};

const sessionServiceMock = jasmine.createSpyObj<SessionService>(
  'SessionService',
  ['getUser']
);

const sessionRepositoryMock = jasmine.createSpyObj<SessionRepository>(
  'SessionRepository',
  ['logout']
);

describe('PanelRootComponent', () => {
  let component: PanelRootComponent;
  let fixture: ComponentFixture<PanelRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelRootComponent],
      imports: [NavbarModule, RouterTestingModule],
      providers: [
        { provide: SessionRepository, useValue: sessionRepositoryMock },
        { provide: SessionService, useValue: sessionServiceMock },
      ],
    });

    sessionServiceMock.getUser.and.returnValue(
      User.fromPrimitive(userPrimiveMock)
    );

    fixture = TestBed.createComponent(PanelRootComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
