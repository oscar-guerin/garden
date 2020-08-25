import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsComponent } from './crops.component';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { ListCropComponent } from './list-crop/list-crop.component';
import { DetailCropComponent } from './detail-crop/detail-crop.component';

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
				path: 'detail/:id',
				component: DetailCropComponent
			},
			{
				path: 'edit/:id',
				component: EditCropComponent
			},
			{
				path: 'create',
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
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [
		RouterModule,
	]
})
export class CropsRoutingModule {
}
