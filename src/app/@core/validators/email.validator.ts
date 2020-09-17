import { ValidatorFn, Validators } from '@angular/forms';

export const emailValidator: ValidatorFn[] = [
	Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/),
	Validators.maxLength(100)
];
