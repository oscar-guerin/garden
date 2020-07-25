import { NgModule } from '@angular/core';
import { CropService } from './services/crop.service';
import { MaterialModule } from '../@material/material.module';

const SERVICES: any = [
	CropService
];

@NgModule({
	imports: [
		MaterialModule,
	],
	exports: [
		MaterialModule,
	],
	declarations: [],
	providers: [
		...SERVICES
	],
})
export class CoreModule {
}
