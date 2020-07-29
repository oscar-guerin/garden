import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

interface Language {
	code: string;
	name: string;
}

@Component({
	selector: 'app-language-switcher',
	templateUrl: './language-switcher.component.html'
})
export class LanguageSwitcherComponent {

	public readonly languages: Language[] = [
		{ code: 'en', name: 'English' },
		{ code: 'fr', name: 'Français' }
	]

	public languageControl: FormControl;

	public constructor(private readonly translateService: TranslateService) {
		this.languageControl = new FormControl(this.translateService.currentLang);
	}
}