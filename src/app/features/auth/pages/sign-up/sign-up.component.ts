import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Types
import { SignUpCredentials } from '../../types/sign-up-credentials.interface';
import { SignUpForm } from '../../types/sign-up-form.type';

// Validators
import { ValidatePassword } from 'src/app/shared/components/password/validators/password/password.validator';
import { ValidateValuesMatch } from 'src/app/core/validators/values-match/values-match.validator';

// Services
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [],
})
export class SignUpComponent implements OnInit {
  public constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public signUpForm!: SignUpForm;

  public ngOnInit(): void {
    /**
     * Validate at least:
     * - One lowercase
     * - One uppercase
     * - One digit
     * x One special character
     * x Minimum 8 characters
     */
    this.signUpForm = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required, ValidatePassword()]],
        confirmPassword: ['', [Validators.required, ValidatePassword()]],
      },
      { validators: [ValidateValuesMatch('password', 'confirmPassword')] }
    );
  }

  public signUp(): void {
    const signUpCredentials = this.signUpForm.value as SignUpCredentials;
    this.authService.signUp(signUpCredentials);
    this.router.navigate(['/auth/sign-in']);
  }

  public get doesPasswordDoNotMatch(): boolean {
    return (this.signUpForm.hasError('valuesMatch') &&
      this.signUpForm.get('password')?.dirty &&
      this.signUpForm.get('confirmPassword')?.dirty)!;
  }
}
