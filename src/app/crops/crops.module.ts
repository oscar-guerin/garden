import { NgModule } from '@angular/core';
import { CropsRoutingModule } from './crops-routing.module';
import { CoreModule } from '../@core/core.module';

@NgModule({
	imports: [
		CropsRoutingModule,
		CoreModule
	],
	exports: [],
	declarations: [],
	providers: [],
})
export class CropsModule {
}
