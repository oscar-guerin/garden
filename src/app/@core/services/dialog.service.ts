import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../../@shared/confirm/confirm.component';
import { ConfirmTextCode } from '../enumerations/confirm-text-code';

@Injectable()
export class DialogService {

	private static instance: DialogService;

	public constructor(private matDialog: MatDialog) {
		DialogService.instance = this;
	}

	public static getInstance(): DialogService {
		return this.instance;
	}

	public open(component: ComponentType<unknown>, data: any = {}): void {
		this.matDialog.open(component, { data, minWidth: '40vw' });
	}

	public confirm(textCode: ConfirmTextCode): Observable<boolean> {
		return this.matDialog.open(ConfirmComponent, { data: textCode }).componentInstance.confirm$;
	}
}