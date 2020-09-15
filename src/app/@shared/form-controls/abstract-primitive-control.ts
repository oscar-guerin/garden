import {
	AbstractControl,
	AbstractControlOptions,
	ControlValueAccessor,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validator,
	ValidatorFn
} from '@angular/forms';

export abstract class AbstractPrimitiveControl<T> implements ControlValueAccessor, Validator {

	public form: FormGroup;

	protected constructor(public fieldName: string,
						  defaultValue: string = '',
						  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null) {
		this.form = new FormGroup({});
		this.form.addControl(this.fieldName, new FormControl(defaultValue, validatorOrOpts));
	}

	public get field(): AbstractControl {
		return this.form.get(this.fieldName);
	}

	public onTouched: () => void = () => {
	};

	public registerOnChange(fn: any): void {
		this.form.get(this.fieldName).valueChanges.subscribe(fn);
	}

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		isDisabled ? this.form.disable() : this.form.enable();
	}

	public writeValue(value: T): void {
		if (value === undefined) {
			return;
		}

		if (value === null) {
			this.field.reset();
		} else {
			this.field.setValue(value);
		}
	}

	public validate(control: AbstractControl): ValidationErrors | null {
		return this.field.valid ? null : this.field.errors;
	}
}
