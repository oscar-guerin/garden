import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsComponent } from './crops.component';
import { EditCropComponent } from './edit-crop/edit-crop.component';

const COMPONENTS: any = [
	CropsComponent,
	EditCropComponent
];

const routes: Routes = [
	{
		path: '',
		component: CropsComponent,
		children: [
			{
				path: 'edit',
				component: EditCropComponent
			}
		]
	},
];

@NgModule({
	declarations: [
		...COMPONENTS
	],
	imports: [RouterModule.forChild(routes)],
	exports: [
		RouterModule,
		...COMPONENTS
	]
})
export class CropsRoutingModule {
}
