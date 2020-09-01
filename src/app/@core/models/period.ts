import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';

@FirebaseResource({
	firebaseConfiguration: '/periods',
	path: '/periods'
})
export class Period {

	@Id()
	public id: number;

	@Column()
	public name: string;

	public constructor(data: Partial<Period> = {}) {
		Object.assign(this, data);
	}
}
