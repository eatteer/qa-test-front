import { FormControl, FormGroup } from '@angular/forms';

export type SignUpForm = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}>;
