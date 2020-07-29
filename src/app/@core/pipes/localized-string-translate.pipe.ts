import { Pipe, PipeTransform } from '@angular/core';
import { LocalizedString } from '../models/localized-string';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
	name: 'lst'
})
export class LocalizedStringTranslatePipe implements PipeTransform {

	public constructor(private readonly translateService: TranslateService) {
	}

	public transform(value: LocalizedString): string {
		switch (this.translateService.currentLang) {
			case 'en':
				return value.en;
			case 'fr':
				return value.fr;
		}
	}
}