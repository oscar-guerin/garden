import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../@core/services/storage.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
	selector: 'app-image-picker',
	templateUrl: './image-picker.component.html'
})
export class ImagePickerComponent {

	public form: FormGroup;

	public constructor(private readonly fb: FormBuilder,
					   private readonly storageService: StorageService) {
		this.form = this.fb.group({
			file: []
		});
	}

	public get fileEvent(): Event {
		return this.form.get('file').value;
	}

	public onImageCropped(event: ImageCroppedEvent): void {
		console.log(event);
	}

	public submit(): void {
	}
}