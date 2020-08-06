import { PathParam } from '@witty-services/ngx-repository';

export class ActionQuery {

	@PathParam()
	public cropId: string;

	public constructor(data: Partial<ActionQuery> = {}) {
		Object.assign(this, data);
	}
}