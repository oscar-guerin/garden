import { Component } from '@angular/core';
import { AuthService } from '../../@core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../@core/validators/email.validator';

@Component({
	templateUrl: './mail-auth.component.html'
})
export class MailAuthComponent {

	public form: FormGroup;

	public constructor(private readonly authService: AuthService,
					   private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			email: [undefined, [Validators.required, emailValidator]],
			password: [undefined, Validators.required]
		})
	}

	public submit(): void {
		if (this.form.valid) {
			this.authService.login(this.form.value);
		}
	}
}