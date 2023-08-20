export class User {
  public fullName!: string;

  constructor(
    public email: string,
    public firstName: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${lastName}`;
  }
}
