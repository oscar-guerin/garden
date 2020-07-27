export class LocalizedString {

	public en: string;
	public fr: string;

	public constructor(data: Partial<LocalizedString> = {}) {
		Object.assign(this, data);
	}
}
