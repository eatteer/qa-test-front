import { ToastVariant } from './toast-variant.type';

export interface Toast {
  variant: ToastVariant;
  message: string;
}
