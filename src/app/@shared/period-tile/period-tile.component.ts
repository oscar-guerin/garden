import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Period } from '../../@core/models/period';

@Component({
	selector: 'app-period-tile',
	templateUrl: './period-tile.component.html',
	styles: [`
        :host {
            display: block;
            width: 32px;
            height: 16px;
            background-color: #cccccc44;
            border: 1px white solid;
            cursor: pointer;
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
	@Input()
	@HostBinding('style.background-color')
	public color: string;

	@Output()
	public select: EventEmitter<Period> = new EventEmitter<Period>();

	@HostListener('click', ['$event'])
	public emit(): void {
		this.select.emit(this.selected ? undefined : this.period);
	}
}