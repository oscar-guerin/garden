import { Component, Input } from '@angular/core';
import { Action } from '../../../@core/models/action';

@Component({
	selector: 'app-calendar-action',
	template: `
        <ng-container>
            {{ action.name }}
        </ng-container>
	`,
	styles: [`
        :host {
            display: block;
            width: 120px;
            height: 50px;
            background-color: #ff5252;
        }
	`]
})

export class CalendarActionComponent {

	@Input()
	public action: Action;

	public constructor() {
	}
}