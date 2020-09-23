import { Component, HostBinding, Input } from '@angular/core';
import { Action } from '../../../@core/models/action';
import { DialogService } from '../../../@core/services/dialog.service';
import { DetailActionComponent } from '../../detail-action/detail-action.component';

@Component({
	selector: 'app-calendar-action',
	template: `
        <div class="h-100 w-100 d-flex align-items-center justify-content-center"
             [class.pointer]="action.id"
             (click)="openDetailActionDialog(action)">
            <span>{{ action.name }}</span>
        </div>
	`,
	styles: [`
        :host {
            display: block;
            height: 50px;
            box-shadow: inset 0 0 50px 6px white;
            transition: box-shadow 0.2s ease-out;
            font-size: 12px;
        }

        :host:hover {
            box-shadow: inset 0 0 20px 6px white;
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

	public openDetailActionDialog(action: Action): void {
		if (action.id) {
			DialogService.getInstance().open(DetailActionComponent, { action });
		}
	}
}