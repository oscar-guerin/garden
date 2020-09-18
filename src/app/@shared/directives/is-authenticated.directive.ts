import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { ObservableDestroy } from '@witty-services/ngx-common';
import { map, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../@core/services/auth.service';
import { User } from '../../@core/models/user';

@Directive({ selector: '[isAuthenticated]' })
export class IsAuthenticatedDirective extends ObservableDestroy {

	private hasView: boolean = false;

	public constructor(private templateRef: TemplateRef<any>,
					   private authService: AuthService,
					   private viewContainer: ViewContainerRef) {
		super();

		this.authService.getUser().pipe(
			map((user: User) => !!user),
			takeUntil(this.onDestroy$),
		).subscribe((can: boolean) => {
			if (can && !this.hasView) {
				this.viewContainer.createEmbeddedView(this.templateRef);
				this.hasView = true;
			} else if (!can && this.hasView) {
				this.viewContainer.clear();
				this.hasView = false;
			}
		});
	}
}
