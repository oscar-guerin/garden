import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../@core/services/storage.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { switchMap, takeUntil } from 'rxjs/operators';
import { from, Observable, Subject } from 'rxjs';

interface ImageUploaderDialogData {
	path: string;
}

@Component({
	templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent extends ObservableDestroy {

	public readonly downloadUrl$: Observable<string>;

	public form: FormGroup;
	private croppedImage: string;
	private submit$: Subject<string> = new Subject<string>();

	public constructor(@Inject(MAT_DIALOG_DATA) private readonly data: ImageUploaderDialogData,
					   private readonly fb: FormBuilder,
					   private readonly storageService: StorageService) {
		super();
		this.form = this.fb.group({
			file: []
		});

		this.downloadUrl$ = this.submit$.pipe(
			switchMap((submittedImage: string) => from(fetch(submittedImage))),
			switchMap((res: Response) => from(res.blob())),
			switchMap((blob: Blob) => this.storageService.upload(blob, this.data.path)),
			takeUntil(this.onDestroy$),
		)
	}

	public get fileEvent(): Event {
		return this.form.get('file').value;
	}

	public onImageCropped(event: ImageCroppedEvent): void {
		this.croppedImage = event.base64;
	}

	public submit(): void {
		if (this.croppedImage != null && this.data.path != null) {
			this.submit$.next(this.croppedImage);
		}
	}
}