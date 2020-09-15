import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { merge, Observable, of } from 'rxjs';
import { Crop } from '../../@core/models/crop';
import { filter, first, map, startWith, switchMap, switchMapTo, takeUntil } from 'rxjs/operators';
import { CropService } from '../../@core/services/crop.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ifNotNull, ifNull } from '@witty-services/rxjs-common';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { EditActionComponent } from '../../@shared/edit-action/edit-action.component';
import { Action } from '../../@core/models/action';
import { Strategy } from '../../@core/models/strategy';
import { EditStrategyComponent } from '../../@shared/edit-strategy/edit-strategy.component';
import { DialogService } from '../../@core/services/dialog.service';

@Component({
	selector: 'app-edit-crop',
	templateUrl: './edit-crop.component.html'
})
export class EditCropComponent extends ObservableDestroy {

	public crop$: Observable<Crop>;
	public form: FormGroup;
	public freshImageUploadPath$: Observable<string>;

	public constructor(private readonly route: ActivatedRoute,
					   private readonly router: Router,
					   private readonly cropService: CropService,
					   private readonly fb: FormBuilder) {
		super();
		this.form = this.fb.group({
			name: [],
			imageUrl: []
		});

		const editCrop$: Observable<Crop> = route.paramMap.pipe(
			map((paramMap: ParamMap) => paramMap.get('id')),
			ifNotNull(),
			switchMap((id: string) => cropService.findById(id)),
		);

		const createCrop$: Observable<Crop> = route.paramMap.pipe(
			map((paramMap: ParamMap) => paramMap.get('id')),
			ifNull(),
			switchMapTo(of(new Crop()))
		);

		this.crop$ = merge(editCrop$, createCrop$);

		this.crop$.pipe(
			takeUntil(this.onDestroy$)
		).subscribe(
			(crop: Crop) => this.form.patchValue(crop)
		);

		this.freshImageUploadPath$ = this.form.get('imageUrl').valueChanges.pipe(
			startWith(''),
			switchMapTo(this.crop$),
			filter((crop: Crop) => !!crop.id),
			map((crop: Crop) => crop.freshImageUploadPath()),
		);
	}

	public openActionDialog(action: Action = new Action()): void {
		this.crop$.pipe(
			first()
		).subscribe((crop: Crop) => DialogService.getInstance().open(EditActionComponent, { action, crop }))
	}

	public openStrategyDialog(strategy: Strategy = new Strategy()): void {
		this.crop$.pipe(
			first()
		).subscribe((crop: Crop) => DialogService.getInstance().open(EditStrategyComponent, { strategy, crop }))
	}

	public submit(): void {
		this.crop$.pipe(
			switchMap((crop: Crop) => this.cropService.createOrUpdate(crop.merge(this.form.value))),
			first()
		).subscribe(() => this.router.navigateByUrl('/'))
	}
}
