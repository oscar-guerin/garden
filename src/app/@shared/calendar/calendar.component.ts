import { Component, Input } from '@angular/core';
import { Month } from '../../@core/enumerations/month';
import { Action } from '../../@core/models/action';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html'
})
export class CalendarComponent {

	@Input()
	public plannedActions: Action[];

	public months: typeof Month = Month;

	public constructor() {
	}
}