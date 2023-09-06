import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Domain
import { PhoneValidationMethod } from '../domain/interfaces/phone-validaton-method.interface';
import { PhoneValidationRepository } from '../phone-validation.repository';

// Modules
import { AuthModule } from '@features/auth/auth.module';

@Injectable({ providedIn: AuthModule })
export class GetPhoneValidationMethodsHandler {
  public constructor(
    private readonly phoneValidationRepository: PhoneValidationRepository
  ) {}

  public getMethods(): Observable<PhoneValidationMethod[]> {
    return this.phoneValidationRepository.getMethods();
  }
}
