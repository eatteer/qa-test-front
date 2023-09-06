import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// Application
import { SignInHandler } from '@core/auth/application/sign-in-handler';

// Domain
import { SessionRepository } from '@core/session/domain/session.repository';

// Components
import { SignInComponent } from './sign-in.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

// Modules
import { PasswordModule } from '@features/lib/components/password/password.module';

const sessionRepositoryMock = jasmine.createSpyObj<SessionRepository>(
  'SessionRepository',
  ['logout']
);

const signInHandlerMock = jasmine.createSpyObj<SignInHandler>('SignInUseCase', [
  'signIn',
]);

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent, SignInFormComponent],
      imports: [PasswordModule, ReactiveFormsModule],
      providers: [
        { provide: SessionRepository, useValue: sessionRepositoryMock },
        { provide: SignInHandler, useValue: signInHandlerMock },
      ],
    });

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
