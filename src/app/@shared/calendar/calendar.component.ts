import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Month } from '../../@core/enumerations/month';
import { Action } from '../../@core/models/action';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html'
})
export class CalendarComponent implements AfterViewInit {

	@Input()
	public plannedActions: Action[];

	@ViewChild('calendarHolder')
	public calendarHolderEl: ElementRef;
	public monthsFlexBasis: string;
	public months: typeof Month = Month;

	public constructor() {
	}

	public ngAfterViewInit(): void {
		setTimeout(() => this.computeMonthFlexBasis(this.calendarHolderEl.nativeElement.offsetWidth));
	}

	@HostListener('window:resize', [])
	public onResize(): void {
		this.computeMonthFlexBasis(this.calendarHolderEl.nativeElement.offsetWidth);
	}

	private computeMonthFlexBasis(calendarHolderWidth: number): void {
		const targetMonthWidth: number = 120;
		const itemsPerRow: number = [12, 6, 4, 3, 2, 1].find(
			(numberOfItems: number) => numberOfItems * targetMonthWidth < calendarHolderWidth
		);
		this.monthsFlexBasis = `${Math.floor(100 / itemsPerRow)}%`;
	}

}