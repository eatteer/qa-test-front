import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: PasswordComponent, multi: true },
  ],
})
export class PasswordComponent implements ControlValueAccessor {
  @Input()
  public id!: string;

  @Input()
  public autocomplete!: string;

  @Input()
  public isDisabled = false;

  public onChange!: (value: string) => void;
  public onTouched!: () => void;

  public value!: string;

  public isPasswordVisible = false;

  public onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  public togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
