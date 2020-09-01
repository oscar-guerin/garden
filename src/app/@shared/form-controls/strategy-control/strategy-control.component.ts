import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Strategy } from '../../../@core/models/strategy';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';

@Component({
	selector: 'app-strategy-control',
	templateUrl: './strategy-control.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => StrategyControlComponent),
			multi: true
		},
	]
})
export class StrategyControlComponent extends AbstractPrimitiveControl<Strategy> {

	public constructor() {
		super('strategy', '');
	}
}
