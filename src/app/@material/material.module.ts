import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

const MATERIAL_MODULES: any = [
	MatToolbarModule,
	MatButtonModule,
	MatTableModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
	MatSelectModule,
	MatDialogModule,
	MatExpansionModule,
	MatMenuModule,
	MatTooltipModule
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
