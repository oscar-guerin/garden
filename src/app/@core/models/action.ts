import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';
import { merge } from 'lodash';

@FirebaseResource({
	firebaseConfiguration: '/crops/:id/actions',
	path: '/crops/:id/actions'
})
export class Action {

	@Id()
	public id: string;

	@Column()
	public name: string;

	@Column()
	public steps: string[];

	public constructor(data: Partial<Action> = {}) {
		Object.assign(this, data);
	}

	public merge(crop: Partial<Action>): Action {
		return merge(this, crop);
	}
}
