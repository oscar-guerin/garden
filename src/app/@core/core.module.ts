import { NgModule } from '@angular/core';
import { CropService } from './services/crop.service';
import { MaterialModule } from '../@material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionService } from './services/action.service';
import { StrategyService } from './services/strategy.service';

const SERVICES: any = [
	CropService,
	ActionService,
	StrategyService
];

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
	],
	declarations: [],
	providers: [
		...SERVICES
	],
})
export class CoreModule {
}
