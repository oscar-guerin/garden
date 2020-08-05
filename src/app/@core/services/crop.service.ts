import { FirebaseRepository } from '@witty-services/ngx-firebase-repository';
import { Crop } from '../models/crop';
import { InjectRepository, Page } from '@witty-services/ngx-repository';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

@Injectable()
export class CropService {

	@InjectRepository({ resourceType: () => Crop, repository: () => FirebaseRepository })
	private readonly cropRepository: FirebaseRepository<Crop, string>;

	public constructor() {
	}

	public createOrUpdate(crop: Crop): Observable<string> {
		if (!!crop.id) {
			return this.cropRepository.update(crop).pipe(
				switchMapTo(of(crop.id))
			);
		} else {
			return this.cropRepository.create(crop);
		}
	}

	public findAll(): Observable<Page<Crop>> {
		return this.cropRepository.findAll();
	}

	public findById(id: string): Observable<Crop> {
		return this.cropRepository.findById(id);
	}
}
