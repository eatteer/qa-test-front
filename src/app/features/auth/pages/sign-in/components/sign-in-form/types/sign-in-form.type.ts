import { FormControl, FormGroup } from '@angular/forms';

export type SignInForm = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
}>;
