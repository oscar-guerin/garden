import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crop } from '../../@core/models/crop';
import { first, map, switchMap, takeUntil } from 'rxjs/operators';
import { CropService } from '../../@core/services/crop.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ifNotNull } from '@witty-services/rxjs-common';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../../@core/types/language-code.type';

@Component({
	selector: 'app-edit-crop',
	templateUrl: './edit-crop.component.html'
})
export class EditCropComponent extends ObservableDestroy {

	public crop$: Observable<Crop>;
	public form: FormGroup;

	public constructor(private readonly route: ActivatedRoute,
					   private readonly router: Router,
					   private readonly cropService: CropService,
					   private readonly translateService: TranslateService,
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
			(crop: Crop) => this.form.patchValue(crop.toFormValue(translateService.currentLang as LanguageCode))
		);
	}

	public submit(): void {
		this.crop$.pipe(
			switchMap((crop: Crop) => this.cropService.updateWithForm(crop, this.form.value)),
			first()
		).subscribe(() => this.router.navigateByUrl('/'))
	}
}
