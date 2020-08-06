import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id, PathColumn } from '@witty-services/ngx-repository';
import { merge } from 'lodash';

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
	public steps: string[];

	public constructor(data: Partial<Action> = {}) {
		Object.assign(this, data);
	}

	public merge(...actions: Partial<Action>[]): Action {
		return merge(this, ...actions);
	}
}
