import { Component, Input } from '@angular/core';
import { Variety } from '../../@core/models/variety';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-edit-varieties',
	templateUrl: './edit-varieties.component.html'
})
export class EditVarietiesComponent {

	@Input()
	public varieties: Variety[];

	public form: FormGroup;

	public constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			varieties: this.fb.array([])
		});

		if (this.varieties && this.varieties.length > 0) {
			this.varieties.forEach((variety: Variety) => this.addVariety(variety));
		} else {
			this.addVariety();
		}
	}

	public get varietiesArrayControl(): FormArray {
		return this.form.get('varieties') as FormArray;
	}

	public addVariety(variety?: Variety): void {
		this.varietiesArrayControl.push(this.fb.group({
			name: [variety ? variety.name : undefined],
			binomialName: [variety ? variety.binomialName : undefined]
		}));
	}

	public removeStep(index: number): void {
		this.varietiesArrayControl.removeAt(index);
	}
}