import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Strategy } from '../../../@core/models/strategy';
import { AbstractPrimitiveControl } from '../abstract-primitive-control';
import { PeriodService } from '../../../@core/services/period.service';
import { Period } from '../../../@core/models/period';
import { Page } from '@witty-services/ngx-repository';
import { Observable } from 'rxjs';
import { Crop } from '../../../@core/models/crop';
import { Action } from '../../../@core/models/action';

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

	@Input()
	public crop: Crop;
	@Input()
	public strategy: Strategy;

	public periods$: Observable<Page<Period>>;
	public selectedPeriod: Period;
	public selectedAction: Action;

	public constructor(private periodService: PeriodService) {
		super('strategy', '');
		this.periods$ = this.periodService.findAll();
	}

	public onPeriodSelected(period: Period): void {
		this.selectedPeriod = period;
	}

	public planAction(periodId: number, action: Action): void {
		this.field.setValue(this.strategy.planAction(periodId, action));
		this.selectedAction = undefined;
		this.selectedPeriod = undefined;
	}

	public removeAction(periodId: number): void {
		this.field.setValue(this.strategy.planAction(periodId, new Action()));
	}
}
