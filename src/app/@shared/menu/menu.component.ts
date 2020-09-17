import { Component } from '@angular/core';
import { DialogService } from '../../@core/services/dialog.service';
import { MailAuthComponent } from '../mail-auth/mail-auth.component';
import { AuthService } from '../../@core/services/auth.service';
import { User } from '../../@core/models/user';
import { Observable } from 'rxjs';
import { softCache } from '@witty-services/rxjs-common';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html'
})
export class MenuComponent {

	public user$: Observable<User>;

	public constructor(private readonly authService: AuthService) {
		this.user$ = this.authService.getUser().pipe(
			softCache()
		);
	}

	public openMailAuthDialog(): void {
		DialogService.getInstance().openSmall(MailAuthComponent);
	}

	public logout(): void {
		this.authService.logout();
	}
}
