import { FormControl, FormGroup } from '@angular/forms';

export type SignUpForm = FormGroup<{
  fullName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}>;
