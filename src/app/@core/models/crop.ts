import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';

@FirebaseResource({
	firebaseConfiguration: '/crops'
})
export class Crop {

	@Id()
	public id: string;

	@Column()
	public name: string;

	@Column()
	public sowingStartingWeek: number;

	@Column()
	public plantationStartingWeek: number;
}
