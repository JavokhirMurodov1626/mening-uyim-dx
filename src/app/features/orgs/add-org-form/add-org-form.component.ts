import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { OrgsService } from '../../../pages/orgs/orgs.service';
import { Region } from '../../../types/region.model';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'add-org-form',
  standalone: true,
  imports: [NgSelectModule, ReactiveFormsModule],
  templateUrl: './add-org-form.component.html',
  styleUrl: './add-org-form.component.css',
})
export class AddOrgFormComponent {
  regions!: Region[];

  addOrgForm = this.fb.group({
    region: [0, [Validators.required]],
    district: [0, [Validators.required]],
    orgName: ['', [Validators.required]],
    supervisor: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    tin: [
      '',
      [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
    ],
  });
  constructor(private orgsService: OrgsService, private fb: FormBuilder) {}

  ngOnInit() {
    // Fetch regions
    this.orgsService.fetchRegions().subscribe({
      next: (resData) => {
        this.regions = resData.data;
        console.log(this.regions, 'regions from add org form component');
      },
      error: (err) => {
        console.log(err, 'error from add org form component');
      },
    });
  }

  selectRegionHandler(region: Region) {
    this.addOrgForm.patchValue({
      region: region?.value,
    });
  }

  selectDistrictHandler(district: Region) {
    this.addOrgForm.patchValue({
      district: district?.value,
    });
  }

  onSubmit() {
    console.log(this.addOrgForm.value);
    console.log('submitted');
  }

  checkTin() {
    console.log('checking tin');
  }
}
