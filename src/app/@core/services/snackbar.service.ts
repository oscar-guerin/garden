import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorCode } from '../enumerations/error-code';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SnackbarService {

	public constructor(private readonly snackbar: MatSnackBar,
					   private readonly translateService: TranslateService) {
	}

	public error(errorCode: ErrorCode, action?: string): void {
		this.snackbar.open(this.translateService.instant(`ERROR.${errorCode}`), action, {
			duration: 5000,
			panelClass: 'snackbar-error'
		});
	}
}