import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

const EXPORTABLE_COMPONENTS: any = [
	MenuComponent,
];

@NgModule({
	imports: [
		CoreModule,
		RouterModule
	],
	exports: [
		...EXPORTABLE_COMPONENTS
	],
	declarations: [
		...EXPORTABLE_COMPONENTS,
		LanguageSwitcherComponent
	],
	providers: [],
})
export class SharedModule {
}
