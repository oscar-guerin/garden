import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../@core/core.module';

const EXPORTABLE_COMPONENTS: any = [
	MenuComponent
]

@NgModule({
	imports: [
		CoreModule
	],
	exports: [
		...EXPORTABLE_COMPONENTS
	],
	declarations: [
		...EXPORTABLE_COMPONENTS
	],
	providers: [],
})
export class SharedModule {
}
