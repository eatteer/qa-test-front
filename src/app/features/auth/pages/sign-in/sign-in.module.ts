import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { SignInComponent } from './sign-in.component';

// Modules
import { PasswordModule } from '@features/lib/components/password/password.module';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

@NgModule({
  declarations: [SignInComponent, SignInFormComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
  ],
})
export class SignInModule {}
