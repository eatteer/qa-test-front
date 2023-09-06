import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhoneValidationRepository } from '../phone-validation.repository';
import { PhoneValidationMethod } from '../domain/interfaces/phone-validaton-method.interface';
import { PhoneValidationMethodCriteria } from '../domain/interfaces/phone-validation-method-criteria.interface';

@Injectable()
export class ApiPhoneValidationRepository
  implements PhoneValidationRepository
{
  public getMethods(): Observable<PhoneValidationMethod[]> {
    return of([
      { id: 'sms', name: 'SMS' },
      { id: 'whatsapp', name: 'Whatsapp' },
      { id: 'telegram', name: 'Telegram' },
    ]);
  }

  public getMatchingMethods(
    criteria: PhoneValidationMethodCriteria
  ): Observable<PhoneValidationMethod | null> {
    const method: PhoneValidationMethod | undefined = [
      { id: 'sms', name: 'SMS' },
      { id: 'whatsapp', name: 'Whatsapp' },
      { id: 'telegram', name: 'Telegram' },
    ].find((method) => method.id === criteria.id);

    return of(method ?? null);
  }
}
