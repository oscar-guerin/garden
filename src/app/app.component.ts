import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from './@core/services/dialog.service';

@Component({
	selector: 'app-root',
	template: `
        <app-menu></app-menu>
        <router-outlet></router-outlet>
	`
})
export class AppComponent {

	public constructor(translateService: TranslateService,
					   private readonly dialogService: DialogService) { // DO NOT REMOVE
		translateService.use('fr');
	}
}
