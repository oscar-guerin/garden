import { FirebaseRepository } from '@witty-services/ngx-firebase-repository';
import { InjectRepository, Page } from '@witty-services/ngx-repository';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';
import { Strategy } from '../models/strategy';

@Injectable()
export class StrategyService {

	@InjectRepository({ resourceType: () => Strategy, repository: () => FirebaseRepository })
	private readonly strategyRepository: FirebaseRepository<Strategy, string>;

	public constructor() {
	}

	public createOrUpdate(strategy: Strategy): Observable<string> {
		console.log(strategy);
		if (!!strategy.id) {
			return this.strategyRepository.update(strategy).pipe(
				switchMapTo(of(strategy.id))
			);
		} else {
			return this.strategyRepository.create(strategy);
		}
	}

	public findAll(): Observable<Page<Strategy>> {
		return this.strategyRepository.findAll();
	}

	public findById(id: string): Observable<Strategy> {
		return this.strategyRepository.findById(id);
	}
}
