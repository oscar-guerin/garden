import { FirebaseRepository } from '@witty-services/ngx-firebase-repository';
import { InjectRepository, Page } from '@witty-services/ngx-repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Period } from '../models/period';
import { hardCache } from '@witty-services/rxjs-common';

@Injectable()
export class PeriodService {

	@InjectRepository({ resourceType: () => Period, repository: () => FirebaseRepository })
	private readonly periodRepository: FirebaseRepository<Period, number>;

	private readonly periods$: Observable<Page<Period>>;

	public constructor() {
		this.periods$ = this.periodRepository.findAll().pipe(
			hardCache()
		);
	}

	public findAll(): Observable<Page<Period>> {
		return this.periods$;
	}

}
