import { Injectable } from '@angular/core';
import { Toast } from '../../types/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  public toasts: Toast[] = [];

  constructor() {}

  public open(toast: Toast): void {
    this.toasts = [...this.toasts, toast];
  }
}
