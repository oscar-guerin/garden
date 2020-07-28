import { LocalizedString } from '../models/localized-string';
import { Converter } from './converter';

export class LocalizedStringConverter implements Converter<string, any> {
	public fromJson(value: LocalizedString): string {
		return value.en;
	}

	public toJson(value: string): any {
		return Object.assign({}, new LocalizedString({en: value}));
	}

}
