import { Component } from '@angular/core';
import { ToastsService } from '../../services/toasts/toasts.service';
import { Toast } from '../../types/toast.interface';

@Component({
  selector: 'app-toasts-container',
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.css'],
})
export class ToastsContainerComponent {
  public constructor(private readonly toastsService: ToastsService) {}

  public get toasts(): Toast[] {
    return this.toastsService.toasts;
  }
}
