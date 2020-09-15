import { NgModule } from '@angular/core';
import { CropService } from './services/crop.service';
import { MaterialModule } from '../@material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionService } from './services/action.service';
import { StrategyService } from './services/strategy.service';
import { PeriodService } from './services/period.service';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { DialogService } from './services/dialog.service';
import { StorageService } from './services/storage.service';
import { SnackbarService } from './services/snackbar.service';
import { DynamicOverlay } from './dynamic-overlay.service';
import { DynamicOverlayContainer } from './dynamic-overlay-container.service';

const SERVICES: any = [
	CropService,
	ActionService,
	StrategyService,
	PeriodService,
	DialogService,
	StorageService,
	SnackbarService
];

const PIPES: any = [
	EnumToArrayPipe
]

@NgModule({
	imports: [
		MaterialModule,
		TranslateModule,
		CommonModule,
		ReactiveFormsModule,
	],
	exports: [
		MaterialModule,
		TranslateModule,
		CommonModule,
		ReactiveFormsModule,
		...PIPES
	],
	declarations: [
		...PIPES
	],
	providers: [
		...SERVICES,
		DynamicOverlayContainer,
		DynamicOverlay,
	],
})
export class CoreModule {
}
