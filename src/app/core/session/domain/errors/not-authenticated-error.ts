export class NotAuthenticatedError extends Error {
  constructor() {
    super('User is not authenticated');
    this.name = 'NotAuthenticatedError';
  }
}
