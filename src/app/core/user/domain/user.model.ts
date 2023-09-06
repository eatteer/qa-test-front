import { UserEmail } from './user-email';
import { UserFullName } from './user-full-name';
import { UserId } from './user-id';
import { UserPrimitive } from './user.primitive';

export class User {
  private constructor(
    public readonly id: UserId,
    public readonly fullName: UserFullName,
    public readonly email: UserEmail
  ) {}

  public static fromPrimitive({ id, fullName, email }: UserPrimitive): User {
    return new User(
      new UserId(id),
      new UserFullName(fullName),
      new UserEmail(email)
    );
  }

  public toPrimitive(): UserPrimitive {
    return {
      id: this.id.value,
      email: this.email.value,
      fullName: this.fullName.value,
    };
  }
}
