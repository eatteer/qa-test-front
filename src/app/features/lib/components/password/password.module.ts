import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PasswordComponent } from './password.component';

@NgModule({
  declarations: [PasswordComponent],
  imports: [CommonModule],
  exports: [PasswordComponent],
})
export class PasswordModule {}
