import { FirebaseRepository } from '@witty-services/ngx-firebase-repository';
import { InjectRepository, Page } from '@witty-services/ngx-repository';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';
import { Action } from '../models/action';

@Injectable()
export class ActionService {

	@InjectRepository({ resourceType: () => Action, repository: () => FirebaseRepository })
	private readonly actionRepository: FirebaseRepository<Action, string>;

	public constructor() {
	}

	public createOrUpdate(action: Action): Observable<string> {
		if (!!action.id) {
			return this.actionRepository.update(action).pipe(
				switchMapTo(of(action.id))
			);
		} else {
			return this.actionRepository.create(action);
		}
	}

	public findAll(): Observable<Page<Action>> {
		return this.actionRepository.findAll();
	}

	public findById(id: string): Observable<Action> {
		return this.actionRepository.findById(id);
	}
}
