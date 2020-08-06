import { FirebaseRepository, FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id, Page, SubCollection } from '@witty-services/ngx-repository';
import { merge } from 'lodash';
import { Action } from './action';
import { ActionQuery } from '../queries/action.query';
import { Observable } from 'rxjs';

@FirebaseResource({
	firebaseConfiguration: '/crops',
	path: '/crops'
})
export class Crop {

	@Id()
	public id: string;

	@Column()
	public name: string;

	@SubCollection({
		resourceType: () => Action,
		params: (crop: Crop) => new ActionQuery({ cropId: crop.id }),
		repository: () => FirebaseRepository
	})
	public actions$: Observable<Page<Action>>;

	public constructor(data: Partial<Crop> = {}) {
		Object.assign(this, data);
	}

	public merge(crop: Crop): Crop {
		return merge(this, crop);
	}
}
