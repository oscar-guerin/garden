import { Component } from '@angular/core';
import { Month } from '../../@core/enumerations/month';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html'
})
export class CalendarComponent {

	public months: typeof Month = Month;

	public constructor() {
	}
}