import { FirebaseRepository } from '@witty-services/ngx-firebase-repository';
import { InjectRepository, Page } from '@witty-services/ngx-repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Period } from '../models/period';
import { hardCache } from '@witty-services/rxjs-common';
import { map } from 'rxjs/operators';

@Injectable()
export class PeriodService {

	@InjectRepository({ resourceType: () => Period, repository: () => FirebaseRepository })
	private readonly periodRepository: FirebaseRepository<Period, number>;

	private readonly periods$: Observable<Page<Period>>;

	public constructor() {
		this.periods$ = this.periodRepository.findAll().pipe(
			map((periods: Page<Period>) => periods.sort((p: Period, q: Period) => p.id - q.id)),
			hardCache()
		);
	}

	public findAll(): Observable<Page<Period>> {
		return this.periods$;
	}

}
