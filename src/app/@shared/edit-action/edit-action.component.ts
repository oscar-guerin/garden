import { Component, Inject } from '@angular/core';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { ActionService } from '../../@core/services/action.service';
import { Action } from '../../@core/models/action';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Crop } from '../../@core/models/crop';
import { ActionType } from '../../@core/enumerations/action-type';

interface EditActionDialogData {
	crop: Crop;
	action: Action;
}

@Component({
	selector: 'app-edit-action',
	templateUrl: './edit-action.component.html'
})
export class EditActionComponent extends ObservableDestroy {

	public form: FormGroup;
	public actionTypes: typeof ActionType = ActionType;

	public constructor(@Inject(MAT_DIALOG_DATA) public data: EditActionDialogData,
					   private readonly dialogRef: MatDialogRef<EditActionComponent>,
					   private readonly route: ActivatedRoute,
					   private readonly router: Router,
					   private readonly actionService: ActionService,
					   private readonly translateService: TranslateService,
					   private readonly fb: FormBuilder) {
		super();
		this.form = this.fb.group({
			name: [this.data.action.name],
			actionType: [this.data.action.actionType],
			steps: this.fb.array([])
		});

		if (this.data.action.steps) {
			this.data.action.steps.forEach((step: string) => this.addStep(step));
		} else {
			this.addStep();
		}
	}

	public get stepsArrayControl(): FormArray {
		return this.form.get('steps') as FormArray;
	}

	public submit(): void {
		this.actionService.createOrUpdate(this.data.action.merge(this.form.value, { cropId: this.data.crop.id })).pipe(
			first()
		).subscribe(() => this.dialogRef.close());
	}

	public addStep(stepValue?: string): void {
		this.stepsArrayControl.push(new FormControl(stepValue));
	}

	public removeStep(index: number): void {
		this.stepsArrayControl.removeAt(index);
	}
}