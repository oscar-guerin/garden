import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';
import { Crop } from '../../../@core/models/crop';
import { Variety } from '../../../@core/models/variety';

@Component({
	selector: 'app-varieties-control',
	templateUrl: './varieties-control.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => VarietiesControlComponent),
			multi: true
		},
	]
})
export class VarietiesControlComponent extends AbstractPrimitiveControl<Variety[]> {

	@Input()
	public crop: Crop;

	public constructor() {
		super('strategy', '');
	}
}