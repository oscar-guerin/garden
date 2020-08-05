import { FirebaseRepository } from '@witty-services/ngx-firebase-repository';
import { Crop } from '../models/crop';
import { InjectRepository, Page } from '@witty-services/ngx-repository';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CropFormValue } from '../interfaces/crop-form-value';
import { map, switchMap } from 'rxjs/operators';
import { LanguageCode } from '../types/language-code.type';

@Injectable()
export class CropService {

	@InjectRepository({ resourceType: () => Crop, repository: () => FirebaseRepository })
	private readonly cropRepository: FirebaseRepository<Crop, string>;

	public constructor(private readonly translateService: TranslateService) {
	}

	public updateWithForm(crop: Crop, formCrop: CropFormValue): Observable<string> {
		return of(formCrop).pipe(
			map((form: CropFormValue) => crop.merge(Crop.fromForm(form, this.translateService.currentLang as LanguageCode))),
			switchMap((mergedCrop: Crop) => this.create(mergedCrop))
		);
	}

	public create(crop: Crop): Observable<string> {
		return this.cropRepository.create(crop);
	}

	public findAll(): Observable<Page<Crop>> {
		return this.cropRepository.findAll();
	}

	public findById(id: string): Observable<Crop> {
		return this.cropRepository.findById(id);
	}
}
