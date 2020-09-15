import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../@core/services/storage.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { from, Observable, Subject } from 'rxjs';

interface ImageUploaderDialogData {
	path: string;
}

@Component({
	templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {

	public readonly downloadUrl$: Observable<string>;

	public form: FormGroup;
	private submittedImage$: Subject<string> = new Subject<string>();
	private croppedImage: string;

	public constructor(@Inject(MAT_DIALOG_DATA) private readonly data: ImageUploaderDialogData,
					   private readonly fb: FormBuilder,
					   private readonly storageService: StorageService) {
		this.form = this.fb.group({
			file: []
		});

		this.downloadUrl$ = this.submittedImage$.pipe(
			switchMap((submittedImage: string) => from(fetch(submittedImage))),
			switchMap((res: Response) => from(res.blob())),
			switchMap((blob: Blob) => this.storageService.upload(blob, this.data.path)),
		);
	}

	public get fileEvent(): Event {
		return this.form.get('file').value;
	}

	public onImageCropped(event: ImageCroppedEvent): void {
		this.croppedImage = event.base64;
	}

	public submit(): void {
		if (this.croppedImage != null && this.data.path != null) {
			this.submittedImage$.next(this.croppedImage);
		}
	}
}