import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from '../../@core/models/crop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CropService } from '../../@core/services/crop.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-detail-crop',
	templateUrl: './detail-crop.component.html'
})
export class DetailCropComponent {

	public crop$: Observable<Crop>;

	public constructor(private readonly route: ActivatedRoute,
					   private readonly cropService: CropService) {
		this.crop$ = route.paramMap.pipe(
			map((paramMap: ParamMap) => paramMap.get('id')),
			switchMap((id: string) => cropService.findById(id))
		)
	}
}
