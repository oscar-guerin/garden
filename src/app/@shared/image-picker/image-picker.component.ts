import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../@core/services/storage.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ImagePickerDialogData {
	path: string;
}

@Component({
	selector: 'app-image-picker',
	templateUrl: './image-picker.component.html'
})
export class ImagePickerComponent {

	public form: FormGroup;
	private croppedImage: string;

	public constructor(@Inject(MAT_DIALOG_DATA) private readonly data: ImagePickerDialogData,
					   private readonly fb: FormBuilder,
					   private readonly storageService: StorageService) {
		this.form = this.fb.group({
			file: []
		});
	}

	public get fileEvent(): Event {
		return this.form.get('file').value;
	}

	public onImageCropped(event: ImageCroppedEvent): void {
		this.croppedImage = event.base64;
	}

	public submit(): void {
		if (this.croppedImage != null && this.data.path != null) {
			fetch(this.croppedImage)
				.then((res: Response) => res.blob())
				.then((blob: Blob) => this.storageService.upload(blob, this.data.path).subscribe(console.log)
				);
		}
	}
}