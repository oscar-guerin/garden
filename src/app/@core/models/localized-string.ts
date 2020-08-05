import { Column } from '@witty-services/ngx-repository';
import { LanguageCode } from '../types/language-code.type';

export class LocalizedString {

	@Column()
	public en: string;

	@Column()
	public fr: string;

	public constructor(data: Partial<LocalizedString> = {}) {
		Object.assign(this, data);
	}

	public mergeWithData(data: string, languageCode: LanguageCode): LocalizedString {
		if (!this) {
			switch (languageCode) {
				case 'en':
					return new LocalizedString({ en: data, fr: `(en) ${data}` });
				case 'fr':
					return new LocalizedString({ en: `(fr) ${data}`, fr: data });
			}
		} else {
			switch (languageCode) {
				case 'en':
					return this.merge({ en: data });
				case 'fr':
					return this.merge({ fr: data });
			}
		}
	}

	public merge(data: Partial<LocalizedString> = {}): LocalizedString {
		return Object.assign(this, data);
	}
}
