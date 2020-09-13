import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';
import { SnackbarService } from '../../../@core/services/snackbar.service';
import { ErrorCode } from '../../../@core/enumerations/error-code';

@Component({
	selector: 'app-file-selector-control',
	templateUrl: './file-selector-control.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FileSelectorControlComponent),
			multi: true
		},
	]
})
export class FileSelectorControlComponent extends AbstractPrimitiveControl<File> {

	@Input()
	public maxSize: number = 5242880;
	@Input()
	public imagesOnly: boolean = false;

	public selectedFile: File;

	public constructor(private readonly snackbarService: SnackbarService) {
		super('file', '');
	}

	public onFileSelected(event: any): void {
		if (this.imagesOnly && !event.target.files[0].type.startsWith('image')) {
			this.snackbarService.error(ErrorCode.FILE_NOT_IMAGE);
		} else if (event.target.files[0].size > this.maxSize) {
			this.snackbarService.error(ErrorCode.FILE_TOO_BIG);
		} else {
			this.selectedFile = event.target.files[0];
			this.field.setValue(this.selectedFile);
		}
	}
}
