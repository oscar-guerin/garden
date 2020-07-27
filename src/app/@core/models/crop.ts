import { FirebaseResource } from '@witty-services/ngx-firebase-repository';
import { Column, Id } from '@witty-services/ngx-repository';
import { LocalizedStringConverter } from '../converters/localized-string.converter';

@FirebaseResource({
	firebaseConfiguration: '/crops',
	path: '/crops'
})
export class Crop {

	@Id()
	public id: string;

	@Column({field: 'name', customConverter: () => LocalizedStringConverter})
	public name: string;

	@Column()
	public sowingStartingWeek: number;

	@Column()
	public plantationStartingWeek: number;
}
