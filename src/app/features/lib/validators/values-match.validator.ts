import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ValidateValuesMatch(
  controlNameA: string,
  controlNameB: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const controlA = formGroup.get(controlNameA);
    const controlB = formGroup.get(controlNameB);

    if (!controlA || !controlB) {
      throw new Error(
        `Controls ${controlNameA} or ${controlNameB} do not exist`
      );
    }

    if (controlA.value !== controlB.value) {
      return { valuesMatch: true };
    }

    return null;
  };
}
