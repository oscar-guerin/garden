import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id, PathColumn } from '@witty-services/ngx-repository';
import { merge } from 'lodash';

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

	@Column()
	public plannedActions: number[];

	public constructor(data: Partial<Strategy> = {}) {
		Object.assign(this, data);
	}

	public merge(...actions: Partial<Strategy>[]): Strategy {
		return merge(this, ...actions);
	}
}
