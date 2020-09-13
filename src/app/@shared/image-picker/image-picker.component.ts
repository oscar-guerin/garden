import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../@core/services/storage.service';

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
		})
	}

	public submit(): void {
	}
}