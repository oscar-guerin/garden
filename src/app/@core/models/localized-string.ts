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

	public static build(data: string, languageCode: LanguageCode): LocalizedString {
		switch (languageCode) { // TODO can be optimized ?
			case 'en':
				return new LocalizedString({ en: data, fr: `(en) ${data}` });
			case 'fr':
				return new LocalizedString({ en: `(fr) ${data}`, fr: data });
		}
	}
}
