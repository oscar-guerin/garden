import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../@core/models/action';
import { ActionService } from '../../@core/services/action.service';
import { of } from 'rxjs';
import { confirm } from '../../@core/operators/confirm.operator'
import { switchMap } from 'rxjs/operators';
import { ConfirmTextCode } from '../../@core/enumerations/confirm-text-code';

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
		of(this.action).pipe(
			confirm(ConfirmTextCode.DELETE),
			switchMap((action: Action) => this.actionService.delete(action))
		).subscribe();
	}
}