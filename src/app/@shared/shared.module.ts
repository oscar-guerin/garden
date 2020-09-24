import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { EditActionComponent } from './edit-action/edit-action.component';
import { ActionExpanderComponent } from './action-expander/action-expander.component';
import { StrategyPlannerControlComponent } from './form-controls/strategy-planner-control/strategy-planner-control.component';
import { PeriodTileComponent } from './period-tile/period-tile.component';
import { EditStrategyComponent } from './edit-strategy/edit-strategy.component';
import { StrategyExpanderComponent } from './strategy-expander/strategy-expander.component';
import { _MatMenuDirectivesModule } from '@angular/material/menu';
import { ConfirmComponent } from './confirm/confirm.component';
import { FileSelectorControlComponent } from './form-controls/file-selector-control/file-selector-control.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageControlComponent } from './form-controls/image-control/image-control.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProgressSpinnerDirective } from './directives/progress-spinner.directive';
import { ProgressSpinnerContainerComponent } from './progress-spinner-container/progress-spinner-container.component';
import { DetailStrategyComponent } from './detail-strategy/detail-strategy.component';
import { MailAuthComponent } from './mail-auth/mail-auth.component';
import { CreateCropComponent } from './create-crop/create-crop.component';
import { IsAuthenticatedDirective } from './directives/is-authenticated.directive';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarMonthComponent } from './calendar/calendar-month/calendar-month.component';
import { CalendarActionComponent } from './calendar/calendar-month/calendar-action.component';
import { DetailActionComponent } from './detail-action/detail-action.component';
import { VarietiesControlComponent } from './form-controls/varieties-control/varieties-control.component';
import { EditVarietiesComponent } from './edit-varieties/edit-varieties.component';

const EXPORTABLE_COMPONENTS: any = [
	MenuComponent,
	ActionExpanderComponent,
	StrategyExpanderComponent,
	EditActionComponent,
	EditStrategyComponent,
	ConfirmComponent,
	ImageUploaderComponent,
	DetailStrategyComponent,
	MailAuthComponent,
	CreateCropComponent,
	CalendarComponent,
	DetailActionComponent
];

const FORM_CONTROLS: any = [
	StrategyPlannerControlComponent,
	FileSelectorControlComponent,
	ImageControlComponent,
	VarietiesControlComponent
];

const DIRECTIVES: any = [
	ProgressSpinnerDirective,
	IsAuthenticatedDirective
];

@NgModule({
	imports: [
		CoreModule,
		RouterModule,
		ImageCropperModule,
		_MatMenuDirectivesModule
	],
	exports: [
		...EXPORTABLE_COMPONENTS,
		...FORM_CONTROLS,
		...DIRECTIVES
	],
	declarations: [
		...EXPORTABLE_COMPONENTS,
		...FORM_CONTROLS,
		...DIRECTIVES,
		LanguageSwitcherComponent,
		PeriodTileComponent,
		ProgressSpinnerContainerComponent,
		CalendarMonthComponent,
		CalendarActionComponent,
		EditVarietiesComponent
	],
	providers: [],
})
export class SharedModule {
}
