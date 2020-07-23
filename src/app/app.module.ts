import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxFirebaseRepositoryModule } from '@witty-services/ngx-firebase-repository';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { NgxRepositoryModule } from '@witty-services/ngx-repository';
import { CoreModule } from './@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxRepositoryModule.forRoot(),
		NgxFirebaseRepositoryModule.forRoot(
			firebase.initializeApp(environment.firebase).firestore()
		),
		CoreModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
