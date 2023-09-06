import { UserPrimitive } from "../../user/domain/user.primitive";

export interface SessionPrimitive {
  accessToken: string;
  user: UserPrimitive;
}
