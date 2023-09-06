import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

import { Dismiss } from 'flowbite';
import type { DismissOptions, DismissInterface } from 'flowbite';

import { Toast } from '../../types/toast.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements AfterViewInit {
  @Input()
  public toast!: Toast;

  private dismiss!: DismissInterface;

  public constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  public ngAfterViewInit(): void {
    const options: DismissOptions = {};

    this.dismiss = new Dismiss(
      this.elementRef.nativeElement,
      undefined,
      options
    );
  }

  public close(): void {
    this.dismiss.hide();
  }
}
