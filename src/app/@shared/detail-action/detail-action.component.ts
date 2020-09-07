import { Component, EventEmitter, Input, Output } from '@angular/core';
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
	@Output()
	public edit$: EventEmitter<void> = new EventEmitter<void>();

	public constructor(private readonly actionService: ActionService) {
	}

	public edit(): void {
		this.edit$.emit();
	}

	public delete(): void {
		this.actionService.delete(this.action);
	}
}