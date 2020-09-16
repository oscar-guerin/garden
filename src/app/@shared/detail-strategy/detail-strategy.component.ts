import { Component, Input } from '@angular/core';
import { Crop } from '../../@core/models/crop';
import { Strategy } from '../../@core/models/strategy';
import { PeriodService } from '../../@core/services/period.service';
import { Period } from '../../@core/models/period';
import { Page } from '@witty-services/ngx-repository';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-detail-strategy',
	templateUrl: './detail-strategy.component.html'
})
export class DetailStrategyComponent {

	@Input()
	public crop: Crop;
	@Input()
	public strategy: Strategy;

	public periods$: Observable<Page<Period>>;

	public constructor(private readonly periodService: PeriodService) {
		this.periods$ = this.periodService.findAll();
	}
}