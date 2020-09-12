import { Component, forwardRef } from '@angular/core';
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

	public constructor() {
		super('file', '');
	}
}
