import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { User } from '../models/user';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

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

	public logout(): void {
		this.auth.signOut().then();
	}

	public getUser(): Observable<User> {
		return this.auth.user.pipe(
			map((firebaseUser: firebase.User) => !!firebaseUser ? User.fromFirebaseUser(firebaseUser) : null),
		)
	}
}