import { Component, Input } from '@angular/core';
import { Action } from '../../@core/models/action';
import { ActionService } from '../../@core/services/action.service';

@Component({
	selector: 'app-detail-action',
	templateUrl: './detail-action.component.html',
	styles: [`
        :host {
            width: 100%;
        }
	`]
})
export class DetailActionComponent {
	@Input()
	public action: Action;

	public constructor(private readonly actionService: ActionService) {
	}

	public delete(): void {
		this.actionService.delete(this.action);
	}
}