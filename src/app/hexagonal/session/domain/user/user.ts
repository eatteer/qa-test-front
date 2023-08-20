import { UserEmail } from './user-email';
import { UserFirstName } from './user-first-name';
import { UserFullName } from './user-full-name';
import { UserLastName } from './user-last-name';

export class User {
  public fullName: UserFullName;

  public constructor(
    public readonly email: UserEmail,
    public readonly firstName: UserFirstName,
    public readonly lastName: UserLastName
  ) {
    this.fullName = new UserFullName(firstName.value, lastName.value);
  }
}
