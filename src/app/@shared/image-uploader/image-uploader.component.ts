import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../@core/services/storage.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { from, Observable, Subject } from 'rxjs';
import { onAny } from '@witty-services/rxjs-common';

interface ImageUploaderDialogData {
	path: string;
}

@Component({
	templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {

	public readonly downloadUrl$: Observable<string>;

	public form: FormGroup;
	public isLoading: boolean = false;
	private submittedImage$: Subject<string> = new Subject<string>();
	private croppedImage: string;

	public constructor(@Inject(MAT_DIALOG_DATA) private readonly data: ImageUploaderDialogData,
					   private readonly dialogRef: MatDialogRef<ImageUploaderComponent>,
					   private readonly fb: FormBuilder,
					   private readonly storageService: StorageService) {
		this.form = this.fb.group({
			file: []
		});

		this.downloadUrl$ = this.submittedImage$.pipe(
			onAny(() => {
				this.dialogRef.disableClose = true;
				this.isLoading = true;
			}),
			switchMap((submittedImage: string) => from(fetch(submittedImage))),
			switchMap((res: Response) => from(res.blob())),
			switchMap((blob: Blob) => this.storageService.upload(blob, this.data.path)),
			onAny(() => {
				this.dialogRef.close();
				this.isLoading = false;
			})
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