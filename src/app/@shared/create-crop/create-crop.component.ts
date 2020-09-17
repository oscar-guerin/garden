import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../@core/services/snackbar.service';
import { of } from 'rxjs';
import { onAny } from '@witty-services/rxjs-common';
import { first, switchMap } from 'rxjs/operators';
import { Crop } from '../../@core/models/crop';
import { CropService } from '../../@core/services/crop.service';
import { Family } from '../../@core/enumerations/family';

@Component({
	templateUrl: './create-crop.component.html'
})
export class CreateCropComponent {

	public form: FormGroup;
	public isLoading: boolean = false;
	public families: typeof Family = Family;

	public constructor(private readonly cropService: CropService,
					   private readonly dialog: MatDialogRef<CreateCropComponent>,
					   private readonly snackbarService: SnackbarService,
					   private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: [undefined, [Validators.required]],
			family: [undefined, Validators.required]
		})
	}

	public get nameControl(): AbstractControl {
		return this.form.get('name');
	}

	public get familyControl(): AbstractControl {
		return this.form.get('family');
	}

	public submit(): void {
		if (this.form.valid) {
			of(this.form.value).pipe(
				onAny(() => {
					this.isLoading = true;
					this.dialog.disableClose = true;
				}),
				switchMap((crop: Crop) => this.cropService.createOrUpdate(crop)),
				onAny(() => this.isLoading = false),
				first()
			).subscribe(() => {
				this.dialog.close()
			});
		} else {
			this.form.markAllAsTouched();
		}
	}
}