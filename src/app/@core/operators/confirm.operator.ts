import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { first, switchMapTo } from 'rxjs/operators';
import { DialogService } from '../services/dialog.service';
import { ifTruthy } from '@witty-services/rxjs-common';
import { ConfirmTextCode } from '../enumerations/confirm-text-code';

export function confirm<T>(textCode: ConfirmTextCode): MonoTypeOperatorFunction<T> {
	return (input$: Observable<T>) => input$.pipe(
		switchMapTo(DialogService.getInstance().confirm(textCode).pipe(
			first()
		)),
		ifTruthy(),
		switchMapTo(input$)
	);
}
