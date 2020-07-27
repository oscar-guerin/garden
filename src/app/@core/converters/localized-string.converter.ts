import { LocalizedString } from '../models/localized-string';
import { Converter } from './converter';

export class LocalizedStringConverter implements Converter<string, LocalizedString> {
	public fromJson(value: LocalizedString): string {
		return value.en;
	}

	public toJson(value: string): LocalizedString {
		return new LocalizedString({en: value});
	}

}
