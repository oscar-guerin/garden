import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id, PathColumn } from '@witty-services/ngx-repository';
import { merge } from 'lodash';
import { Action } from './action';

@FirebaseResource({
	firebaseConfiguration: '/crops/:cropId/strategies',
	path: '/crops/:cropId/strategies'
})
export class Strategy {

	@Id()
	public id: string;

	@PathColumn()
	public cropId: string;

	@Column()
	public name: string;

	@Column({ type: () => Action })
	public plannedActions: Action[] = new Array(24).fill(new Action());

	public constructor(data: Partial<Strategy> = {}) {
		Object.assign(this, data);
	}

	public merge(...strategies: Partial<Strategy>[]): Strategy {
		return merge(this, ...strategies);
	}

	public planAction(periodId: number, action: Action): Strategy {
		this.plannedActions[periodId] = action;

		return this;
	}
}
