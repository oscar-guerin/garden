import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';
import { LocalizedString } from './localized-string';
import { CropFormValue } from '../interfaces/crop-form-value';

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

	public static fromForm(value: CropFormValue): Crop {
		return new Crop({
			name: LocalizedString.build(null, null) // TODO
		})
	}
}
