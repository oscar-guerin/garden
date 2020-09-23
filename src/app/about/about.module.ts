import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CoreModule } from '../@core/core.module';

@NgModule({
	imports: [
		AboutRoutingModule,
		CoreModule
	],
	exports: [],
	declarations: [AboutComponent],
	providers: [],
})
export class AboutModule {
}
