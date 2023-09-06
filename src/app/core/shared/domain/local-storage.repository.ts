import { InjectionToken } from '@angular/core';

export const LocalStorageRepository =
  new InjectionToken<LocalStorageRepository>('LocalStorageRepository');

export interface LocalStorageRepository {
  set<T>(key: string, value: T): void;
  get<T>(key: string): T | null;
  remove(key: string): void;
}
