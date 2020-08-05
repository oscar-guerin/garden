import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';
import { LocalizedString } from './localized-string';
import { CropFormValue } from '../interfaces/crop-form-value';
import { LanguageCode } from '../types/language-code.type';
import { merge } from 'lodash';

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

	public toFormValue(languageCode: LanguageCode): CropFormValue {
		return {
			name: this.name.get(languageCode)
		};
	}

	public mergeWithForm(value: CropFormValue, languageCode: LanguageCode): Crop {
		return this.merge(new Crop({
			name: this.name.mergeWithData(value.name, languageCode)
		}));
	}

	public merge(crop: Crop): Crop {
		return merge(this, crop);
	}
}
