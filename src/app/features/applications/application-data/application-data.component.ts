import { Component } from '@angular/core';
import { TooltipDirective } from '../../../directives/tooltip/tooltip.directive';

@Component({
  selector: 'application-data',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './application-data.component.html',
  styleUrl: './application-data.component.css',
})

export class ApplicationDataComponent {
  copyToClipboard(number: string) {
    navigator.clipboard.writeText(number);
  }
}
