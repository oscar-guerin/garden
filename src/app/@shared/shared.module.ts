import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { EditActionComponent } from './edit-action/edit-action.component';
import { DetailActionComponent } from './detail-action/detail-action.component';
import { StrategyPlannerControlComponent } from './form-controls/strategy-planner-control/strategy-planner-control.component';
import { PeriodTileComponent } from './period-tile/period-tile.component';
import { EditStrategyComponent } from './edit-strategy/edit-strategy.component';
import { DetailStrategyComponent } from './detail-strategy/detail-strategy.component';
import { _MatMenuDirectivesModule } from '@angular/material/menu';
import { ConfirmComponent } from './confirm/confirm.component';
import { FileSelectorControlComponent } from './form-controls/file-selector-control/file-selector-control.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageControlComponent } from './form-controls/image-control/image-control.component';
import { ImageCropperModule } from 'ngx-image-cropper';

const EXPORTABLE_COMPONENTS: any = [
	MenuComponent,
	DetailActionComponent,
	DetailStrategyComponent,
	EditActionComponent,
	EditStrategyComponent,
	ConfirmComponent,
	ImageUploaderComponent
];

const FORM_CONTROLS: any = [
	StrategyPlannerControlComponent,
	FileSelectorControlComponent,
	ImageControlComponent
]

@NgModule({
	imports: [
		CoreModule,
		RouterModule,
		ImageCropperModule,
		_MatMenuDirectivesModule
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
