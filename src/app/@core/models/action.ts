import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id, PathColumn } from '@witty-services/ngx-repository';
import { merge } from 'lodash';
import { ActionType } from '../enumerations/action-type';

@FirebaseResource({
	firebaseConfiguration: '/crops/:cropId/actions',
	path: '/crops/:cropId/actions'
})
export class Action {

	@Id()
	public id: string;

	@PathColumn()
	public cropId: string;

	@Column()
	public name: string;

	@Column()
	public actionType: ActionType;

	@Column()
	public steps: string[];

	public constructor(data: Partial<Action> = {}) {
		Object.assign(this, data);
	}

	public merge(...actions: Partial<Action>[]): Action {
		return merge(this, ...actions);
	}

	public getColorCode(): string {
		switch (this.actionType) {
			case ActionType.SOWING:
				return '#cbe296';
			case ActionType.PLANTING:
				return '#eae39b';
			case ActionType.CARE:
				return '#f3d497';
			case ActionType.HARVEST:
				return '#d9a38e';
			default:
				return undefined;
		}
	}
}
