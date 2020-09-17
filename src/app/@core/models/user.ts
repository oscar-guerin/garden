import * as firebase from 'firebase';

export class User {

	public id: string;

	public username: string;

	public constructor(data: Partial<User> = {}) {
		Object.assign(this, data);
	}

	public static fromFirebaseUser(firebaseUser: firebase.User): User {
		return new User({
			id: firebaseUser.uid,
			username: firebaseUser.email
		})
	}
}