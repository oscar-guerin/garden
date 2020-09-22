import { Component, Input } from '@angular/core';
import { Month } from '../../../@core/enumerations/month';
import { Action } from '../../../@core/models/action';

@Component({
	selector: 'app-calendar-month',
	templateUrl: './calendar-month.component.html'
})
export class CalendarMonthComponent {

	@Input()
	public month: Month;
	@Input()
	public firstHalfAction: Action;
	@Input()
	public secondHalfAction: Action;
}