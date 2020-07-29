import { NgModule } from '@angular/core';
import { CropService } from './services/crop.service';
import { MaterialModule } from '../@material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalizedStringTranslatePipe } from './pipes/localized-string-translate.pipe';

const SERVICES: any = [
	CropService
];

const PIPES: any = [
	LocalizedStringTranslatePipe
]

@NgModule({
	imports: [
		MaterialModule,
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
