import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public user: User | null = new User(
    'kyojiro@hashira.com',
    'Kyojiro',
    'Rengoku'
  );

  public logout(): void {
    this.user = null;
  }
}
