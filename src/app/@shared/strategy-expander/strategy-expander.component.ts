import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Strategy } from '../../@core/models/strategy';
import { of } from 'rxjs';
import { confirm } from '../../@core/operators/confirm.operator';
import { ConfirmTextCode } from '../../@core/enumerations/confirm-text-code';
import { switchMap } from 'rxjs/operators';
import { StrategyService } from '../../@core/services/strategy.service';

@Component({
	selector: 'app-strategy-expander',
	templateUrl: './strategy-expander.component.html',
	styles: [`
        :host {
            width: 100%;
        }
	`]
})
export class StrategyExpanderComponent {

	@Input()
	public strategy: Strategy;
	@Output()
	public edit$: EventEmitter<void> = new EventEmitter<void>();

	public constructor(private readonly strategyService: StrategyService) {
	}

	public edit(): void {
		this.edit$.emit();
	}

	public delete(): void {
		of(this.strategy).pipe(
			confirm(ConfirmTextCode.DELETE),
			switchMap((strategy: Strategy) => this.strategyService.delete(strategy))
		).subscribe();
	}
}