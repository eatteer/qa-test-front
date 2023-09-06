import { Injectable } from '@angular/core';

// Domain
import { PhoneValidationMethodCriteria } from '../domain/interfaces/phone-validation-method-criteria.interface';
import { PhoneValidationRepository } from '../phone-validation.repository';

// Modules
import { AuthModule } from '@features/auth/auth.module';

@Injectable({ providedIn: AuthModule })
export class GetPhoneValidationMethodsMatchingHandler {
  public constructor(
    private phoneValidationRepository: PhoneValidationRepository
  ) {}

  public getMatchingMethods(criteria: PhoneValidationMethodCriteria) {
    return this.phoneValidationRepository.getMatchingMethods({
      id: criteria.id,
    });
  }
}
