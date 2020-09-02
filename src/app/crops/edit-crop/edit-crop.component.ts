import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crop } from '../../@core/models/crop';
import { first, map, switchMap, takeUntil } from 'rxjs/operators';
import { CropService } from '../../@core/services/crop.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ifNotNull } from '@witty-services/rxjs-common';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { MatDialog } from '@angular/material/dialog';
import { EditActionComponent } from '../../@shared/edit-action/edit-action.component';
import { Action } from '../../@core/models/action';
import { Strategy } from '../../@core/models/strategy';
import { EditStrategyComponent } from '../../@shared/edit-strategy/edit-strategy.component';

@Component({
	selector: 'app-edit-crop',
	templateUrl: './edit-crop.component.html'
})
export class EditCropComponent extends ObservableDestroy {

	public crop$: Observable<Crop>;
	public form: FormGroup;

	public constructor(private readonly route: ActivatedRoute,
					   private readonly router: Router,
					   private readonly dialog: MatDialog,
					   private readonly cropService: CropService,
					   private readonly fb: FormBuilder) {
		super();
		this.crop$ = route.paramMap.pipe(
			map((paramMap: ParamMap) => paramMap.get('id')),
			ifNotNull(),
			switchMap((id: string) => cropService.findById(id))
		);

		this.form = this.fb.group({
			name: ['']
		});

		this.crop$.pipe(
			takeUntil(this.onDestroy$)
		).subscribe(
			(crop: Crop) => this.form.patchValue(crop)
		);
	}

	public openActionDialog(action: Action = new Action()): void {
		this.crop$.pipe(
			first()
		).subscribe((crop: Crop) => this.dialog.open(EditActionComponent, { data: { action, crop } }))
	}

	public openStrategyDialog(strategy: Strategy = new Strategy()): void {
		this.crop$.pipe(
			first()
		).subscribe((crop: Crop) => this.dialog.open(EditStrategyComponent, { data: { strategy, crop } }))
	}

	public submit(): void {
		this.crop$.pipe(
			switchMap((crop: Crop) => this.cropService.createOrUpdate(crop.merge(this.form.value))),
			first()
		).subscribe(() => this.router.navigateByUrl('/'))
	}
}
