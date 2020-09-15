import { Component } from '@angular/core';

@Component({
	selector: 'app-progress-spinner-container',
	template: `
        <mat-spinner diameter="40"></mat-spinner>
	`,
	styles: [`
        ::ng-deep .mat-progress-spinner circle, .mat-spinner circle {
            stroke: #29d;
        }

	`]
})
export class ProgressSpinnerContainerComponent {
}
