import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';
import { DialogService } from '../../../@core/services/dialog.service';
import { ImageUploaderComponent } from '../../image-uploader/image-uploader.component';
import { first, tap } from 'rxjs/operators';

@Component({
	selector: 'app-image-control',
	templateUrl: './image-control.component.html',
	styles: [`
        img {
            cursor: pointer;
        }
	`],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ImageControlComponent),
			multi: true
		},
	]
})
export class ImageControlComponent extends AbstractPrimitiveControl<string> {

	@Input()
	public path: string;

	public constructor() {
		super('image', undefined);
	}

	public openImagePickerDialog(): void {
		const content: ImageUploaderComponent = DialogService.getInstance().open(ImageUploaderComponent, { path: this.path });
		content.downloadUrl$.pipe(
			tap(() => this.field.reset()),
			first()
		).subscribe(
			(downloadUrl: string) => this.field.setValue(downloadUrl)
		);
	}
}
