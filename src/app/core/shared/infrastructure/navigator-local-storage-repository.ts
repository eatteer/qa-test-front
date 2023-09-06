import { LocalStorageRepository } from '../domain/local-storage.repository';

export class NavigatorLocalStorage implements LocalStorageRepository {
  public set<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  public get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item) as T;
    else return null;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
