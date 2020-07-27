import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Crop } from '../../@core/models/crop';
import { map, switchMap } from 'rxjs/operators';
import { CropService } from '../../@core/services/crop.service';

@Component({
	selector: 'app-edit-crop',
	templateUrl: './edit-crop.component.html'
})
export class EditCropComponent {

	public crop$: Observable<Crop>;

	public constructor(private readonly route: ActivatedRoute,
	                   private readonly cropService: CropService) {
		this.crop$ = route.paramMap.pipe(
			map((paramMap: ParamMap) => paramMap.get('id')),
			switchMap((id: string) => cropService.findById(id))
		)
	}
}
