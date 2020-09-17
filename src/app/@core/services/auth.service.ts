import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

export interface MailPasswordCredentials {
	email: string;
	password: string;
}

@Injectable()
export class AuthService {

	public constructor(private readonly auth: AngularFireAuth) {
	}

	public login(credentials: MailPasswordCredentials): Observable<any> {
		return from(this.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then());
	}
}