export class UserFullName {
  public constructor(
    private readonly fisrtName: string,
    private readonly lastName: string
  ) {}

  public get value(): string {
    return `${this.fisrtName} ${this.lastName}`;
  }
}
