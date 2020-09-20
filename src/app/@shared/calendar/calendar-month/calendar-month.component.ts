import { Component, Input } from '@angular/core';
import { Month } from '../../../@core/enumerations/month';

@Component({
	selector: 'app-calendar-month',
	templateUrl: './calendar-month.component.html'
})
export class CalendarMonthComponent {

	@Input()
	public month: Month;

	public constructor() {
	}
}