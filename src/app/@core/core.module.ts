import { NgModule } from '@angular/core';
import { CropService } from './services/crop.service';

const SERVICES: any = [
	CropService
];

@NgModule({
	imports: [],
	exports: [],
	declarations: [],
	providers: [
		...SERVICES
	],
})
export class CoreModule {
}
