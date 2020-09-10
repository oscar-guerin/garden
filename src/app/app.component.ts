import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	template: `
        <app-menu></app-menu>
        <router-outlet></router-outlet>
	`
})
export class AppComponent {

	public constructor(translateService: TranslateService) {
		translateService.use('fr');
	}
}
