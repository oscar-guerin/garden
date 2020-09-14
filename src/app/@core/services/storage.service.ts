import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';

export interface UploadStatus {
	progress?: number;
	downloadUrl?: any;
}

@Injectable()
export class StorageService {

	public constructor(private readonly storage: AngularFireStorage) {
	}

	public upload(file: any, path: string): Observable<UploadStatus> {
		const fileRef: AngularFireStorageReference = this.storage.ref(path);
		const task: AngularFireUploadTask = fileRef.put(file);

		const percentageStatus$: Observable<UploadStatus> = task.percentageChanges().pipe(
			map((percentage: number) => ({ progress: percentage }))
		);

		const downloadUrlStatus$: Observable<UploadStatus> = fileRef.getDownloadURL().pipe(
			map((url: any) => ({ downloadUrl: url }))
		);

		return merge(percentageStatus$, downloadUrlStatus$);
	}
}