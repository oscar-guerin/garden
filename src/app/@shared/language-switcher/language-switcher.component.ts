import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { takeUntil } from 'rxjs/operators';

interface Language {
	code: string;
	name: string;
}

@Component({
	selector: 'app-language-switcher',
	templateUrl: './language-switcher.component.html'
})
export class LanguageSwitcherComponent extends ObservableDestroy {

	public readonly languages: Language[] = [
		{ code: 'en', name: 'English' },
		{ code: 'fr', name: 'Français' }
	]

	public languageControl: FormControl;

	public constructor(translateService: TranslateService) {
		super();
		this.languageControl = new FormControl(translateService.currentLang);
		this.languageControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(
			(code: string) => translateService.use(code)
		)
	}
}