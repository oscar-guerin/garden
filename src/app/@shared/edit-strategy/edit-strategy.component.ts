import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Strategy } from '../../@core/models/strategy';
import { Crop } from '../../@core/models/crop';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { StrategyService } from '../../@core/services/strategy.service';

interface EditStrategyDialogData {
	crop: Crop;
	strategy: Strategy;
}

@Component({
	selector: 'app-edit-strategy',
	templateUrl: './edit-strategy.component.html'
})
export class EditStrategyComponent {

	public form: FormGroup;

	public constructor(@Inject(MAT_DIALOG_DATA) public data: EditStrategyDialogData,
					   private readonly dialogRef: MatDialogRef<EditStrategyComponent>,
					   private readonly strategyService: StrategyService,
					   private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: [this.data.strategy.name],
			strategy: [this.data.strategy]
		});
	}

	public submit(): void {
		this.strategyService.createOrUpdate(this.data.strategy.merge(
			this.form.get('strategy').value,
			{ cropId: this.data.crop.id },
			{ name: this.form.get('name').value }
		)).pipe(
			first()
		).subscribe(() => this.dialogRef.close());
	}
}