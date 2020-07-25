import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [
	MatToolbarModule
]

@NgModule({
	imports: [
		...MATERIAL_MODULES
	],
	exports: [
		...MATERIAL_MODULES
	],
	declarations: [],
	providers: [],
})
export class MaterialModule {
}
