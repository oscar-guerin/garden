import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsComponent } from './crops.component';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { ListCropComponent } from './list-crop/list-crop.component';
import { CoreModule } from '../@core/core.module';

const COMPONENTS: any = [
	CropsComponent,
	EditCropComponent,
	ListCropComponent
];

const routes: Routes = [
	{
		path: '',
		component: CropsComponent,
		children: [
			{
				path: '',
				redirectTo: 'list'
			},
			{
				path: 'edit',
				component: EditCropComponent
			},
			{
				path: 'list',
				component: ListCropComponent
			}
		]
	},
];

@NgModule({
	declarations: [
		...COMPONENTS
	],
	imports: [RouterModule.forChild(routes), CoreModule],
	exports: [
		RouterModule,
		...COMPONENTS
	]
})
export class CropsRoutingModule {
}
