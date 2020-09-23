import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { CropsModule } from './crops/crops.module';
import { AboutModule } from './about/about.module';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m: { HomeModule: HomeModule }) => m.HomeModule)
	},
	{
		path: 'crops',
		loadChildren: () => import('./crops/crops.module').then((m: { CropsModule: CropsModule }) => m.CropsModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./about/about.module').then((m: { AboutModule: AboutModule }) => m.AboutModule)
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
