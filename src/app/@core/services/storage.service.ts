import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable()
export class StorageService {

	public constructor(private readonly storage: AngularFireStorage) {
	}

	public upload(file: any, path: string): Observable<string> {
		const fileRef: AngularFireStorageReference = this.storage.ref(path);
		const task: AngularFireUploadTask = fileRef.put(file);

		return fileRef.getDownloadURL();
	}
}