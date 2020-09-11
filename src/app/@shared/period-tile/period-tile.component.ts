import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Period } from '../../@core/models/period';

@Component({
	selector: 'app-period-tile',
	templateUrl: './period-tile.component.html',
	styles: [`
        :host {
            display: block;
            width: 30px;
            height: 15px;
            background-color: #cccccc44;
            border: 1px white solid;
        }

        :host:hover {
            background-color: #71a97477
        }

        :host.tile-selected {
            background-color: #43a047AA
        }
	`]
})
export class PeriodTileComponent {

	@Input()
	public period: Period;
	@Input()
	@HostBinding('class.tile-selected')
	public selected: boolean;

	@Output()
	public select: EventEmitter<Period> = new EventEmitter<Period>();

	@HostListener('click', ['$event'])
	public emit(): void {
		this.select.emit(this.selected ? undefined : this.period);
	}
}