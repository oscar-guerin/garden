import { Component } from '@angular/core';
import { AuthService, MailPasswordCredentials } from '../../@core/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../@core/validators/email.validator';
import { MatDialogRef } from '@angular/material/dialog';
import { EMPTY, of } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';
import { onAny } from '@witty-services/rxjs-common';
import { SnackbarService } from '../../@core/services/snackbar.service';
import { ErrorCode } from '../../@core/enumerations/error-code';

@Component({
	templateUrl: './mail-auth.component.html'
})
export class MailAuthComponent {

	public form: FormGroup;
	public isLoading: boolean = false;

	public constructor(private readonly authService: AuthService,
					   private readonly dialog: MatDialogRef<MailAuthComponent>,
					   private readonly snackbarService: SnackbarService,
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
			of(this.form.value).pipe(
				onAny(() => {
					this.isLoading = true;
					this.dialog.disableClose = true;
				}),
				switchMap((formValue: MailPasswordCredentials) => this.authService.login(formValue).pipe(
					catchError(() => {
						this.snackbarService.error(ErrorCode.USER_NOT_FOUND);

						return EMPTY;
					})
				)),
				onAny(() => this.isLoading = false),
				first()
			).subscribe(() => {
				this.dialog.close()
			});
		} else {
			this.form.markAllAsTouched();
		}
	}
}