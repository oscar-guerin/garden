import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crop } from '../../@core/models/crop';
import { first, map, switchMap } from 'rxjs/operators';
import { CropService } from '../../@core/services/crop.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ifNotNull } from '@witty-services/rxjs-common';

@Component({
	selector: 'app-edit-crop',
	templateUrl: './edit-crop.component.html'
})
export class EditCropComponent {

	public crop$: Observable<Crop>;
	public form: FormGroup;

	public constructor(private readonly route: ActivatedRoute,
					   private readonly router: Router,
					   private readonly cropService: CropService,
					   private readonly fb: FormBuilder) {
		this.crop$ = route.paramMap.pipe(
			map((paramMap: ParamMap) => paramMap.get('id')),
			ifNotNull(),
			switchMap((id: string) => cropService.findById(id))
		);

		this.form = this.fb.group({
			name: ['']
		});
	}

	public submit(): void {
		this.crop$.pipe(
			switchMap((crop: Crop) => this.cropService.updateWithForm(crop, this.form.value)),
			first()
		).subscribe(() => this.router.navigateByUrl('/'))
	}
}
