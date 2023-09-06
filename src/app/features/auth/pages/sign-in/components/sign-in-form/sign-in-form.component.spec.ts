import { ComponentFixture, TestBed } from '@angular/core/testing';

// Application
import { SignInHandler } from '@core/auth/application/sign-in-handler';

// Domain
import { SessionRepository } from '@core/session/domain/session.repository';

// Components
import { SignInFormComponent } from './sign-in-form.component';

const sessionRepositoryMock = jasmine.createSpyObj<SessionRepository>(
  'SessionRepository',
  ['logout']
);

const signInHandlerMock = jasmine.createSpyObj<SignInHandler>('SignInUseCase', [
  'signIn',
]);

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInFormComponent],
      providers: [
        { provide: SessionRepository, useValue: sessionRepositoryMock },
        { provide: SignInHandler, useValue: signInHandlerMock },
      ],
    });

    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email control should be invalid when empty', () => {
    const email = component.signInForm.controls.email;
    expect(email.invalid).toBe(true);
  });

  it('password control should be invalid when empty', () => {
    const password = component.signInForm.controls.password;
    expect(password.invalid).toBe(true);
  });
});
