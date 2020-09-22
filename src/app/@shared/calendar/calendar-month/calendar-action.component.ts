import { Component, HostBinding, Input } from '@angular/core';
import { Action } from '../../../@core/models/action';

@Component({
	selector: 'app-calendar-action',
	template: `
        <div class="h-100 w-100 d-flex align-items-center justify-content-center">
            <span>{{ action.name }}</span>
        </div>
	`,
	styles: [`
        :host {
            display: block;
            width: 120px;
            height: 50px;
            box-shadow: inset 0 0 50px 6px white;
            font-size: 12px;
        }

        span {
            width: 110px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
        }
	`]
})

export class CalendarActionComponent {

	@Input()
	public action: Action;

	@HostBinding('style.background-color')
	public get actionColor(): string {
		return this.action.getColorCode();
	}
}