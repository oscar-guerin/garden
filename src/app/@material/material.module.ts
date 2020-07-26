import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES: any = [
	MatToolbarModule,
	MatButtonModule
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
