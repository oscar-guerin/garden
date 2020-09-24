export class Variety {

	public name: string;

	public binomialName: string;

	public imageUrl: string;

	public constructor(data: Partial<Variety> = {}) {
		Object.assign(this, data);
	}
}