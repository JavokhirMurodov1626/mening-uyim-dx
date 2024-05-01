import { Component, Input } from '@angular/core';

@Component({
  selector: 'status',
  standalone: true,
  imports: [],
  template: `
    <p
     [style]="{
      color:color
     }"
     class="text-sm">{{ label }}</p>
  `,
})
  
export class SingleStatusComponent {
  @Input({ required: true }) color!: string;
  @Input({ required: true }) label!: string;
}

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [SingleStatusComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
 @Input({ required: true }) status!: string;
}



