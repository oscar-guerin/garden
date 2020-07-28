import { NgModule } from '@angular/core';
import { CropService } from './services/crop.service';
import { MaterialModule } from '../@material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const SERVICES: any = [
	CropService
];

@NgModule({
	imports: [
		MaterialModule,
	],
	exports: [
		MaterialModule,
		TranslateModule,
		CommonModule,
		ReactiveFormsModule
	],
	declarations: [],
	providers: [
		...SERVICES
	],
})
export class CoreModule {
}
