import { Component, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	template: `
        <h1>{{ 'CONFIRM.confirm' | translate }}</h1>
        {{ ('CONFIRM.' + textCode) | translate }}
        <div class="d-flex justify-content-end"
             mat-dialog-actions>
            <button (click)="confirm$.next(false)"
                    mat-dialog-close
                    mat-stroked-button>
                {{ 'SHARED.no' | translate }}
            </button>
            <button (click)="confirm$.next(true)"
                    mat-flat-button
                    color="accent"
                    cdkFocusInitial
                    mat-dialog-close>
                {{ 'SHARED.yes' | translate }}
            </button>
        </div>
	`
})
export class ConfirmComponent {

	public confirm$: Subject<boolean> = new Subject<boolean>();

	public constructor(@Inject(MAT_DIALOG_DATA) public textCode: string) {
	}
}