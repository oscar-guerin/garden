import { FirebaseRepository } from '@witty-services/ngx-firebase-repository';
import { Crop } from '../models/crop';
import { InjectRepository } from '@witty-services/ngx-repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CropService {

	@InjectRepository({resourceType: () => Crop, repository: () => FirebaseRepository})
	private readonly cropRepository: FirebaseRepository<Crop, string>;

	public create(crop: Crop): Observable<string> {
		return this.cropRepository.create(crop);
	}
}
