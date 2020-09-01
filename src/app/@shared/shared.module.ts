import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { EditActionComponent } from './edit-action/edit-action.component';
import { DetailActionComponent } from './detail-action/detail-action.component';
import { StrategyControlComponent } from './form-controls/strategy-control/strategy-control.component';
import { PeriodTileComponent } from './period-tile/period-tile.component';

const EXPORTABLE_COMPONENTS: any = [
	MenuComponent,
	DetailActionComponent,
	EditActionComponent
];

const FORM_CONTROLS: any = [
	StrategyControlComponent
]

@NgModule({
	imports: [
		CoreModule,
		RouterModule
	],
	exports: [
		...EXPORTABLE_COMPONENTS,
		...FORM_CONTROLS
	],
	declarations: [
		...EXPORTABLE_COMPONENTS,
		...FORM_CONTROLS,
		LanguageSwitcherComponent,
		PeriodTileComponent
	],
	providers: [],
})
export class SharedModule {
}
