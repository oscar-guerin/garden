import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';
import { DialogService } from '../../../@core/services/dialog.service';
import { ImagePickerComponent } from '../../image-picker/image-picker.component';

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
		super('image', '');
	}

	public openImagePickerDialog(): void {
		DialogService.getInstance().open(ImagePickerComponent, { path: this.path });
	}
}
