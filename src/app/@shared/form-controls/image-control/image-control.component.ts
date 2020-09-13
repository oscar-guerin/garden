import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';

@Component({
	selector: 'app-image-control',
	templateUrl: './image-control.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ImageControlComponent),
			multi: true
		},
	]
})
export class ImageControlComponent extends AbstractPrimitiveControl<string> {

	public constructor() {
		super('image', '');
	}
}
