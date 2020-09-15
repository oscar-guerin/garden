import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ProgressSpinnerContainerComponent } from '../progress-spinner-container/progress-spinner-container.component';
import { DynamicOverlay } from '../../@core/dynamic-overlay.service';

@Directive({
	selector: '[progressSpinner]'
})
export class ProgressSpinnerDirective implements OnChanges {

	@Input('progressSpinner') public show: boolean;
	@Input() public backdrop: boolean = true;

	private overlayRef: OverlayRef;

	public constructor(private readonly elementRef: ElementRef,
					   private readonly dynamicOverlay: DynamicOverlay) {
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.show != null && changes.show.currentValue) {
			this.showSpinner();
		} else {
			this.hideSpinner();
		}
	}

	private showSpinner(): void {
		this.dynamicOverlay.setContainerElement(this.elementRef.nativeElement);
		this.overlayRef = this.dynamicOverlay.create({
			positionStrategy: this.dynamicOverlay.position().global().centerHorizontally().centerVertically(),
			hasBackdrop: this.backdrop,
			backdropClass: 'custom-backdrop-class'
		});
		this.overlayRef.attach(new ComponentPortal(ProgressSpinnerContainerComponent));
	}

	private hideSpinner(): void {
		if (this.overlayRef != null) {
			this.overlayRef.dispose();
		}
	}
}
