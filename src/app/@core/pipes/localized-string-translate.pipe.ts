import { Pipe, PipeTransform } from '@angular/core';
import { LocalizedString } from '../models/localized-string';
import { TranslateService } from '@ngx-translate/core';
import { log } from '@witty-services/rxjs-common';

@Pipe({
	name: 'lst'
})
export class LocalizedStringTranslatePipe implements PipeTransform {

	public constructor(private readonly translateService: TranslateService) {
		this.translateService.onLangChange.pipe(log()).subscribe();
	}

	public transform(value: LocalizedString): string {
		return 'bla';
	}
}