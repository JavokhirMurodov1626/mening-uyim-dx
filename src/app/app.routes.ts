import { Routes } from '@angular/router';
import { RootComponent } from './pages/root/root.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { UsersComponent } from './pages/users/users.component';
import { OrgsComponent } from './pages/orgs/orgs.component';
import { InspectorsComponent } from './pages/inspectors/inspectors.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ApplicationComponent } from './pages/application/application.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: RootComponent,
    children: [
      {
        path: 'applications',
        component: ApplicationsComponent,
      },
      {
        path: 'applications/:id',
        component: ApplicationComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },

      {
        path: 'organizations',
        component: OrgsComponent,
      },

      {
        path: 'inspectors',
        component: InspectorsComponent,
      },
    ],
  },
];
