import { Component, HostBinding, Input } from '@angular/core';
import { Month } from '../../../@core/enumerations/month';
import { Action } from '../../../@core/models/action';

@Component({
	selector: 'app-calendar-month',
	templateUrl: './calendar-month.component.html',
	styles: [`
        :host {
            flex-grow: 1;
            flex-shrink: 0;
        }
	`]
})
export class CalendarMonthComponent {

	@Input()
	public month: Month;
	@Input()
	public firstHalfAction: Action;
	@Input()
	public secondHalfAction: Action;
	@Input()
	@HostBinding('style.flex-basis')
	public flexBasis: string;
}