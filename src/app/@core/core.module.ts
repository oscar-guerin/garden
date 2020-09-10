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

const SERVICES: any = [
	CropService,
	ActionService,
	StrategyService,
	PeriodService
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
		...SERVICES
	],
})
export class CoreModule {
}
