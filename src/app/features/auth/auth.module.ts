import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Infrastructure
import { ApiAuthRepository } from '@core/auth/infrastructure/api-auth.repository';
import { ApiPhoneValidationRepository } from '@core/phone-validation/infrastructure/phone-validation.repository';

// Domain
import { AuthRepository } from '@core/auth/domain/auth.repository';
import { AuthRoutingModule } from './auth-routing.module';
import { PhoneValidationRepository } from '@core/phone-validation/phone-validation.repository';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, HttpClientModule],
  providers: [
    { provide: AuthRepository, useClass: ApiAuthRepository },
    {
      provide: PhoneValidationRepository,
      useClass: ApiPhoneValidationRepository,
    },
  ],
})
export class AuthModule {}
