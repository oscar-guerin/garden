import { Component, Input } from '@angular/core';
import { Period } from '../../@core/enumerations/period';

@Component({
	selector: 'app-period-tile',
	templateUrl: './period-tile.component.html'
})
export class PeriodTileComponent {

	@Input()
	public period: Period;

	public constructor() {
	}
}