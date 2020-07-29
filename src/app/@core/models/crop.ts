import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';
import { LocalizedString } from './localized-string';

@FirebaseResource({
	firebaseConfiguration: '/crops',
	path: '/crops'
})
export class Crop {

	@Id()
	public id: string;

	@Column(() => LocalizedString)
	public name: LocalizedString;

	public constructor(data: Partial<Crop> = {}) {
		Object.assign(this, data);
	}
}
