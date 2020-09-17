import { Component } from '@angular/core';
import { AuthService } from '../../@core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	templateUrl: './mail-auth.component.html'
})
export class MailAuthComponent {

	public form: FormGroup;

	public constructor(private readonly authService: AuthService,
					   private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			email: [],
			password: []
		})
	}
}