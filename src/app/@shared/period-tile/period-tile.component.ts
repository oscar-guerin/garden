import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Period } from '../../@core/models/period';

@Component({
	selector: 'app-period-tile',
	templateUrl: './period-tile.component.html',
	styles: [`
        :host {
            display: block;
            width: 30px;
            height: 15px;
            background-color: gray;
        }
	`]
})
export class PeriodTileComponent {

	@Input()
	public period: Period;

	@Output()
	public selected: EventEmitter<Period> = new EventEmitter<Period>();

	public emit(): void {
		this.selected.emit(this.period);
	}
}