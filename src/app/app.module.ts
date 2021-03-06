import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxFirebaseRepositoryModule } from '@witty-services/ngx-firebase-repository';
import { environment } from '../environments/environment';
import { NgxRepositoryModule } from '@witty-services/ngx-repository';
import { CoreModule } from './@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './@shared/shared.module';
import * as firebase from 'firebase/app';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http);
}

const firebaseApp: () => firebase.firestore.Firestore = () =>
	!firebase.apps.length ? firebase.initializeApp(environment.firebase).firestore() : null

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NgxRepositoryModule.forRoot(),
		NgxFirebaseRepositoryModule.forRoot(
			firebaseApp()
		),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireStorageModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: httpLoaderFactory,
				deps: [HttpClient]
			},
			defaultLanguage: 'fr'
		}),
		CoreModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
