import { Component } from '@angular/core';
import { DialogService } from '../../@core/services/dialog.service';
import { MailAuthComponent } from '../mail-auth/mail-auth.component';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html'
})
export class MenuComponent {

	public constructor() {
	}

	public openMailAuthDialog(): void {
		DialogService.getInstance().openSmall(MailAuthComponent);
	}
}
