export class Route {
  public name: string;
  public relativePath: string;
  public commands: string[];

  public constructor(public readonly rootPath: string) {
    this.relativePath = this.rootPath.slice(1);
    this.commands = this.relativePath.split('/');
    this.name = this.commands.at(-1)!;
  }
}
