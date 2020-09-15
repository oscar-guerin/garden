import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

@Injectable()
export class StorageService {

	public constructor(private readonly storage: AngularFireStorage) {
	}

	public upload(file: any, path: string): Observable<string> {
		const fileRef: AngularFireStorageReference = this.storage.ref(path);

		return from(fileRef.put(file).then()).pipe(
			switchMapTo(fileRef.getDownloadURL()),
		);
	}
}