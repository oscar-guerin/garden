import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CoreModule } from '../@core/core.module';
import { AuthorComponent } from './author/author.component';

@NgModule({
	imports: [
		AboutRoutingModule,
		CoreModule
	],
	exports: [],
	declarations: [
		AboutComponent,
		AuthorComponent
	],
	providers: [],
})
export class AboutModule {
}
