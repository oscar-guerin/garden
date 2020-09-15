import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';
import { DialogService } from '../../../@core/services/dialog.service';
import { ImageUploaderComponent } from '../../image-uploader/image-uploader.component';
import { first } from 'rxjs/operators';

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
	public uploadPath: string;

	public imageSrc: string = '../../../../assets/placeholder.png';

	public constructor() {
		super('image', undefined);
		this.field.valueChanges.subscribe((value: string) => this.imageSrc = value);
	}

	public openImagePickerDialog(): void {
		console.log(this.field.value);

		const content: ImageUploaderComponent = DialogService.getInstance().open(ImageUploaderComponent, { path: this.uploadPath });
		content.downloadUrl$.pipe(
			first()
		).subscribe(
			(downloadUrl: string) => {
				this.field.setValue(downloadUrl);
				this.imageSrc = content.croppedImage;
			}
		);
	}
}
