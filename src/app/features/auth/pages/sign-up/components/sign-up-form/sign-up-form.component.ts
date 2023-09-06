import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Application
import { GetPhoneValidationMethodsMatchingHandler } from '@core/phone-validation/application/get-phone-validation-method-matching-handler';
import { GetPhoneValidationMethodsHandler } from '@core/phone-validation/application/get-validation-methods-handler';
import { SignUpHandler } from '@core/auth/application/sign-up-handler';

// Domain
import { SignUpCredential } from '@core/auth/domain/models/sign-up-credential/sign-up-credential.model';

// Constants
import { SIGN_IN_ROUTE } from '@lib/config/routing/routes';

// Types
import { ApiError } from '@core/shared/infrastructure/api-error.interface';
import { SignUpForm } from './types/sign-up-form.type';

// Validators
import { ValidateFullName } from '../../../../../lib/validators/full-name.validator';
import { ValidatePassword } from '@features/lib/components/password/validators/password.validator';
import { ValidateValuesMatch } from '@features/lib/validators/values-match.validator';

// Services
import { ToastsService } from '@features/lib/library/toasts/services/toasts/toasts.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  public SIGN_IN_ROUTE = SIGN_IN_ROUTE;

  public signUpForm!: SignUpForm;

  public constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private readonly toastsService: ToastsService,
    private readonly signUpHandler: SignUpHandler,
    private readonly getPhoneValidationMethodsHandler: GetPhoneValidationMethodsHandler,
    private readonly getPhoneValidationMethodsMatchingHandler: GetPhoneValidationMethodsMatchingHandler
  ) {}

  public ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required, ValidateFullName()]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, ValidatePassword()]],
        confirmPassword: ['', [Validators.required, ValidatePassword()]],
      },
      { validators: [ValidateValuesMatch('password', 'confirmPassword')] }
    );
  }

  public signUp(): void {
    const { fullName, email, password } = this.signUpForm.getRawValue();

    const signUpCredential = SignUpCredential.fromPrimitive({
      fullName,
      email,
      password,
    });

    this.signUpHandler.signUp(signUpCredential).subscribe({
      next: () => {
        this.toastsService.open({
          variant: 'success',
          message: 'Successful registration!',
        });

        this.router.navigate(['/auth/sign-in']);

        this.getPhoneValidationMethodsHandler.getMethods().subscribe();
        this.getPhoneValidationMethodsMatchingHandler
          .getMatchingMethods({ id: 'sms' })
          .subscribe();
      },
      error: (httpError: HttpErrorResponse) => {
        const apiError: ApiError = httpError.error;
        this.toastsService.open({
          variant: 'error',
          message: apiError.message,
        });
      },
    });
  }

  public get passwordDoNotMatch(): boolean {
    return (this.signUpForm.hasError('valuesMatch') &&
      this.signUpForm.get('password')?.dirty &&
      this.signUpForm.get('confirmPassword')?.dirty)!;
  }
}
