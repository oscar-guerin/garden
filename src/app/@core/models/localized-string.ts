import { Column } from '@witty-services/ngx-repository';

export class LocalizedString {

	@Column()
	public en: string;

	@Column()
	public fr: string;

	public constructor(data: Partial<LocalizedString> = {}) {
		Object.assign(this, data);
	}
}
