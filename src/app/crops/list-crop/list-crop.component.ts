import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from '../../@core/models/crop';
import { Page } from '@witty-services/ngx-repository';
import { CropService } from '../../@core/services/crop.service';
import { DialogService } from '../../@core/services/dialog.service';
import { CreateCropComponent } from '../../@shared/create-crop/create-crop.component';

@Component({
	templateUrl: './list-crop.component.html'
})
export class ListCropComponent {

	public crops$: Observable<Page<Crop>>;
	public readonly displayedColumns: string[] = ['name'];

	public constructor(private readonly cropService: CropService) {
		this.crops$ = this.cropService.findAll();
	}

	public openCreateCropDialog(): void {
		DialogService.getInstance().openSmall(CreateCropComponent);
	}
}
