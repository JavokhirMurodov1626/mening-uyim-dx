import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  isOpen: boolean = true;

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('toggle..')
  }
}
