import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES: any = [
	MatToolbarModule,
	MatButtonModule,
	MatTableModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule
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