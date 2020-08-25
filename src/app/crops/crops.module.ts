import { NgModule } from '@angular/core';
import { CropsRoutingModule } from './crops-routing.module';
import { CoreModule } from '../@core/core.module';
import { SharedModule } from '../@shared/shared.module';
import { CropsComponent } from './crops.component';
import { DetailCropComponent } from './detail-crop/detail-crop.component';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { ListCropComponent } from './list-crop/list-crop.component';

const COMPONENTS: any = [
	CropsComponent,
	DetailCropComponent,
	EditCropComponent,
	ListCropComponent
];

@NgModule({
	imports: [
		CoreModule,
		SharedModule,
		CropsRoutingModule,
	],
	exports: [],
	declarations: [
		...COMPONENTS
	],
	providers: [],
})
export class CropsModule {
}
