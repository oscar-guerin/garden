import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Strategy } from '../../@core/models/strategy';
import { Crop } from '../../@core/models/crop';

interface EditStrategyDialogData {
	crop: Crop;
	strategy: Strategy;
}

@Component({
	selector: 'app-edit-strategy',
	templateUrl: './edit-strategy.component.html'
})
export class EditStrategyComponent {
	public constructor(@Inject(MAT_DIALOG_DATA) public data: EditStrategyDialogData,
					   private readonly dialogRef: MatDialogRef<EditStrategyComponent>,) {
	}
}