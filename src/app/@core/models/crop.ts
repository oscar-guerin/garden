import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';
import { merge } from 'lodash';

@FirebaseResource({
	firebaseConfiguration: '/crops',
	path: '/crops'
})
export class Crop {

	@Id()
	public id: string;

	@Column()
	public name: string;

	public constructor(data: Partial<Crop> = {}) {
		Object.assign(this, data);
	}

	public merge(crop: Crop): Crop {
		return merge(this, crop);
	}
}
