import { PathParam } from '@witty-services/ngx-repository';

export class StrategyQuery {

	@PathParam()
	public cropId: string;

	public constructor(data: Partial<StrategyQuery> = {}) {
		Object.assign(this, data);
	}
}