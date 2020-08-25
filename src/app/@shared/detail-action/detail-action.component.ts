import { Component, Input } from '@angular/core';
import { Action } from '../../@core/models/action';

@Component({
	selector: 'app-detail-action',
	templateUrl: './detail-action.component.html'
})
export class DetailActionComponent {
	@Input()
	public action: Action;
}