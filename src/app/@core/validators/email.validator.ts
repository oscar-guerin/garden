import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } | null => {
		const valid: boolean = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/.test(control.value);

		return valid ? null : { email: { valid: false, value: control.value } };
	};
}