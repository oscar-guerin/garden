import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';

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
export class FileSelectorControlComponent extends AbstractPrimitiveControl<string> {

	@Input()
	public maxLength: number = 5242880;
	@Input()
	public imagesOnly: boolean = false;

	public selectedFile: File;

	public constructor() {
		super('file', '');
	}

	public onFileSelected(event: any): void {
		if (this.imagesOnly && !event.target.files[0].type.startsWith('image')) {
			// TODO toaster
			return;
		}
		if (event.target.files[0].size > this.maxLength) {
			// TODO toaster
			return;
		}

		this.selectedFile = event.target.files[0];
	}
}
