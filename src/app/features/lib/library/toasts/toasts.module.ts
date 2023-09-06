import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [ToastsContainerComponent, ToastComponent],
  imports: [CommonModule],
  exports: [ToastsContainerComponent, ToastComponent],
})
export class ToastsModule {}
