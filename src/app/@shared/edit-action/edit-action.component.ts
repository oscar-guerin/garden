import { Component, Inject } from '@angular/core';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { ActionService } from '../../@core/services/action.service';
import { Action } from '../../@core/models/action';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-edit-action',
	templateUrl: './edit-action.component.html'
})
export class EditActionComponent extends ObservableDestroy {

	public form: FormGroup;

	public constructor(@Inject(MAT_DIALOG_DATA) public action: Action,
					   private readonly route: ActivatedRoute,
					   private readonly router: Router,
					   private readonly actionService: ActionService,
					   private readonly translateService: TranslateService,
					   private readonly fb: FormBuilder) {
		super();

		this.form = this.fb.group({
			name: [this.action.name],
			steps: this.fb.array([])
		});
	}

	public get stepsArrayControl(): FormArray {
		return this.form.get('steps') as FormArray;
	}

	public submit(): void {
		this.actionService.createOrUpdate(this.action.merge(this.form.value)).pipe(
			first()
		).subscribe(() => this.router.navigateByUrl('/'));
	}

	private addStep(stepValue?: string): void {
		this.stepsArrayControl.push(new FormControl(stepValue));
	}
}