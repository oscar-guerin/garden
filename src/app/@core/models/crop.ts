import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Id } from '@witty-services/ngx-repository';

@FirebaseResource({
	firebaseConfiguration: '/crops'
})
export class Crop {

	@Id()
	public id: string;
}
