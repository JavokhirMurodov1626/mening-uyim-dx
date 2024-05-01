import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { AddOrgFormComponent } from '../../features/orgs/add-org-form/add-org-form.component';
import { OrgsService } from './orgs.service';
import { Org } from '../../types/org.model';
@Component({
  selector: 'app-orgs',
  standalone: true,
  imports: [
    TableComponent,
    ButtonComponent,
    ModalComponent,
    AddOrgFormComponent,
  ],
  templateUrl: './orgs.component.html',
  styleUrl: './orgs.component.css',
})
export class OrgsComponent {
  headers = ['Организация', 'Статус'];
  columns = ['org_name', 'org_status'];
  isOpen = false;
  orgs: Org[] = [];
  isOrgsLoading = false;
  constructor(private orgsService: OrgsService) {}

  ngOnInit() {
    this.isOrgsLoading = true;
    this.orgsService.fetchOrgs().subscribe({
      next: (data) => {
        this.isOrgsLoading = false;
        this.orgs = data.data;
      },
      error: (err) => {
        this.isOrgsLoading = false;
      },
    });
  }

  openModalHandler() {
    this.isOpen = !this.isOpen;
  }

  closeModalHandler() {
    this.isOpen = false;
  }
}
