import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { PhoneValidationMethod } from './domain/interfaces/phone-validaton-method.interface';
import { PhoneValidationMethodCriteria } from './domain/interfaces/phone-validation-method-criteria.interface';

export const PhoneValidationRepository =
  new InjectionToken<PhoneValidationRepository>('PhoneValidationRepository');

export interface PhoneValidationRepository {
  getMethods(): Observable<PhoneValidationMethod[]>;
  getMatchingMethods(
    criteria: PhoneValidationMethodCriteria
  ): Observable<PhoneValidationMethod | null>;
}
