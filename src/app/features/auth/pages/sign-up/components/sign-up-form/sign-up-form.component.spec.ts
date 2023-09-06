import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

// Application
import { SignUpHandler } from '@core/auth/application/sign-up-handler';

// Types
import { SignUpForm } from './types/sign-up-form.type';

// Components
import { SignUpFormComponent } from './sign-up-form.component';

// Modules
import { PasswordModule } from '@features/lib/components/password/password.module';

const signUpHandlerMock = jasmine.createSpyObj<SignUpHandler>('SignUpUseCase', [
  'signUp',
]);

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  let signUpForm: SignUpForm;
  let fullNameControl: FormControl<string>;
  let emailControl: FormControl<string>;
  let passwordControl: FormControl<string>;
  let confirmPasswordControl: FormControl<string>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpFormComponent],
      imports: [PasswordModule, ReactiveFormsModule],
      providers: [{ provide: SignUpHandler, useValue: signUpHandlerMock }],
    });
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    signUpForm = component.signUpForm;
    fullNameControl = component.signUpForm.controls.fullName;
    emailControl = component.signUpForm.controls.email;
    passwordControl = component.signUpForm.controls.password;
    confirmPasswordControl = component.signUpForm.controls.confirmPassword;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fullName control should be valid when value is equal than 2 words', () => {
    fullNameControl.setValue('John Doe');
    expect(fullNameControl.valid).toBe(true);
  });

  it('fullName control should be valid when value is more than 2 words', () => {
    fullNameControl.setValue('John Doe Smith');
    expect(fullNameControl.valid).toBe(true);
  });

  it('fullName control should be invalid when empty', () => {
    fullNameControl.setValue('');
    expect(fullNameControl.invalid).toBe(true);
  });

  it('fullName control should be invalid when value is less than 2 words', () => {
    fullNameControl.setValue('John');
    expect(fullNameControl.invalid).toBe(true);
  });

  it('email control should be invalid when empty', () => {
    emailControl.setValue('');
    expect(emailControl.invalid).toBe(true);
  });

  it('password control should be invalid when empty', () => {
    passwordControl.setValue('');
    expect(passwordControl.invalid).toBe(true);
  });

  it('confirmPassword control should be invalid when empty', () => {
    confirmPasswordControl.setValue('');
    expect(confirmPasswordControl.invalid).toBe(true);
  });

  it('signUpForm should not has valuesMatch errorwhen password and confirmPassword match', () => {
    passwordControl.setValue('Nomelase@123');
    confirmPasswordControl.setValue('Nomelase@123');
    expect(component.signUpForm.hasError('valuesMatch')).toBe(false);
  });

  it('signUpForm should has valuesMatch error when password and confirmPassword do not match', () => {
    passwordControl.setValue('Nomelase@123');
    confirmPasswordControl.setValue('Nomelase@321');
    expect(component.signUpForm.hasError('valuesMatch')).toBe(true);
  });
});
