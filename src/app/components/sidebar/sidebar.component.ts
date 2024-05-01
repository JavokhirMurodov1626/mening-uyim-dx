import { Component } from '@angular/core';
import {
  faInbox,
  faBuildingUser,
  faUsers,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})

export class SidebarComponent {
  sidebarMenu = [
    {
      title: 'Murojaatlar',
      icon: faInbox,
      link: 'applications',
    },
    {
      title: 'Tashkilotlar',
      icon: faBuildingUser,
      link: 'organizations',
    },
    {
      title: 'Foydalanuvchilar',
      icon: faUsers,
      link: 'users',
    },
    {
      title: 'Inspektorlar',
      icon: faUserShield,
      link: 'inspectors',
    },
  ];
}
