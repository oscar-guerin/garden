import { Component, Inject } from '@angular/core';
import { Action } from '../../@core/models/action';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DetailActionDialogData {
	action: Action;
}

@Component({
	templateUrl: './detail-action.component.html'
})
export class DetailActionComponent {

	public constructor(@Inject(MAT_DIALOG_DATA) public readonly data: DetailActionDialogData) {
	}
}