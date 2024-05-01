import { Component } from '@angular/core';
import { ApplicationDataComponent } from '../../features/applications/application-data/application-data.component';
import { TimerComponent } from '../../features/applications/timer/timer.component';
import { StepsComponent } from '../../features/applications/steps/steps.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { DalolatnomaFormComponent } from '../../features/applications/dalolatnomaForm/dalolatnomaForm.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-application',
  standalone: true,
  imports: [
    ApplicationDataComponent,
    TimerComponent,
    StepsComponent,
    ModalComponent,
    DalolatnomaFormComponent,
  ],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css',
})
export class ApplicationComponent {
  isModalOpen = false;
  title = 'Application';

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  backToApplications() {
    this.router.navigate(['/applications']);
  }
}
