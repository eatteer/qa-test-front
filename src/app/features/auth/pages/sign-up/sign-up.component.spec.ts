import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// Application
import { SignUpHandler } from '@core/auth/application/sign-up-handler';

// Components
import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';

// Modules
import { PasswordModule } from '@features/lib/components/password/password.module';

const signUpHandlerMock = jasmine.createSpyObj<SignUpHandler>('SignUpUseCase', [
  'signUp',
]);

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignUpComponent,
        SignUpFormComponent,
        SummaryCardComponent,
      ],
      imports: [PasswordModule, ReactiveFormsModule],
      providers: [{ provide: SignUpHandler, useValue: signUpHandlerMock }],
    });

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
