import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';

// Modules
import { PasswordModule } from '@features/lib/components/password/password.module';
import { SignUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  declarations: [SignUpComponent, SignUpFormComponent, SummaryCardComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
  ],
})
export class SignUpModule {}
