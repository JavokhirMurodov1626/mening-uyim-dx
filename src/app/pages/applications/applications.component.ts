import { Component } from '@angular/core';
import { StatsGridComponent } from '../../features/applications/statusGrid/statsGrid.component';
import { ToolboxComponent } from '../../features/applications/toolbox/toolbox.component';
import { TableComponent } from '../../components/table/table.component';
import { HttpService } from '../../services/http.service';
import { ApplicationsService } from './applications.service';
@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [StatsGridComponent, ToolboxComponent, TableComponent],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css',
})
export class ApplicationsComponent {
  columns = [
    'application_number/link',
    'applicant_name/name-block',
    'applicant_address',
    'status/status',
  ];
  headers = ['Ariza raqami', 'Arizachi', 'Arizachi manzili', 'Holati'];
  isLoading: boolean = false;
  applications: any[] = [];

  constructor(
    private httpService: HttpService,
    private appsService: ApplicationsService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.appsService.fetchApplications().subscribe({
      next: (applications) => {
        console.log(applications, 'applications');
        this.applications = applications;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
