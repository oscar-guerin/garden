import { Component, Input } from '@angular/core';
import { Strategy } from '../../@core/models/strategy';

@Component({
	selector: 'app-detail-strategy',
	templateUrl: './detail-strategy.component.html',
	styles: [`
        :host {
            width: 100%;
        }
	`]
})
export class DetailStrategyComponent {

	@Input()
	public strategy: Strategy;
}