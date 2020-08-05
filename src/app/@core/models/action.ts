import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';
import { LocalizedString } from './localized-string';
import { LanguageCode } from '../types/language-code.type';
import { merge } from 'lodash';
import { ActionFormValue } from '../interfaces/action-form-value';

@FirebaseResource({
	firebaseConfiguration: '/crops/:id/actions',
	path: '/crops/:id/actions'
})
export class Action {

	@Id()
	public id: string;

	@Column(() => LocalizedString)
	public name: LocalizedString;

	@Column(() => LocalizedString)
	public steps: LocalizedString[];

	public constructor(data: Partial<Action> = {}) {
		Object.assign(this, data);
	}

	public toFormValue(languageCode: LanguageCode): ActionFormValue {
		return {
			name: this.name.get(languageCode),
			steps: this.steps.map((step: LocalizedString) => step.get(languageCode))
		};
	}

	public mergeWithForm(value: ActionFormValue, languageCode: LanguageCode): Action {
		return this.merge(new Action({
			name: this.name.mergeWithData(value.name, languageCode),
		}));
	}

	public merge(crop: Action): Action {
		return merge(this, crop);
	}
}
