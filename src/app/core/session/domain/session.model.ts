import { User } from '../../user/domain/user.model';
import { AccessToken } from './access-token';
import { SessionPrimitive } from './session.primitive';

export class Session {
  private constructor(
    public readonly accessToken: AccessToken,
    public readonly user: User
  ) {}

  public static fromPrimitive({
    accessToken,
    user,
  }: SessionPrimitive): Session {
    return new Session(new AccessToken(accessToken), User.fromPrimitive(user));
  }

  public toPrimitive(): SessionPrimitive {
    return {
      accessToken: this.accessToken.value,
      user: this.user.toPrimitive(),
    };
  }
}
