import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Strategy } from '../../../@core/models/strategy';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';
import { PeriodService } from '../../../@core/services/period.service';
import { Period } from '../../../@core/models/period';
import { Page } from '@witty-services/ngx-repository';
import { Observable } from 'rxjs';

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

	public periods$: Observable<Page<Period>>

	public constructor(private periodService: PeriodService) {
		super('strategy', '');

		this.periods$ = this.periodService.findAll();
	}
}
