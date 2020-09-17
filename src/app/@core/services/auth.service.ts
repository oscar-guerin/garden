import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

interface MailPasswordCredentials {
	email: string;
	password: string;
}

@Injectable()
export class AuthService {

	public constructor(private readonly auth: AngularFireAuth) {
	}

	public login(credentials: MailPasswordCredentials): void {
		this.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then();
	}
}