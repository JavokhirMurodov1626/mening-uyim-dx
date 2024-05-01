import { Component } from '@angular/core';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { OrgsService } from '../../../pages/orgs/orgs.service';
import { Region } from '../../../types/region.model';
@Component({
  selector: 'add-org-form',
  standalone: true,
  imports: [NgSelectModule],
  templateUrl: './add-org-form.component.html',
  styleUrl: './add-org-form.component.css',
})
  
export class AddOrgFormComponent {
  constructor(private orgsService: OrgsService) {}
  regions!: Region[];
  
  ngOnInit() {
    this.orgsService.fetchRegions().subscribe({
      next: (resData) => {
        this.regions = resData.data;
      },
      error: (err) => {
        console.log(err, 'error from add org form component');
      }
    });
  }

  selectRegionHandler(region: Region) {
    
  }
}
