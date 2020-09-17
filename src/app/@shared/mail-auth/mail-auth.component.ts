import { Component } from '@angular/core';
import { AuthService } from '../../@core/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../@core/validators/email.validator';

@Component({
	templateUrl: './mail-auth.component.html'
})
export class MailAuthComponent {

	public form: FormGroup;

	public constructor(private readonly authService: AuthService,
					   private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			email: [undefined, [Validators.required, emailValidator()]],
			password: [undefined, Validators.required]
		})
	}

	public get emailControl(): AbstractControl {
		return this.form.get('email');
	}

	public get passwordControl(): AbstractControl {
		return this.form.get('password');
	}

	public submit(): void {
		if (this.form.valid) {
			this.authService.login(this.form.value);
		} else {
			this.form.markAllAsTouched();
		}
	}
}