import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button (click)="onClick()" class="btn-primary py-3 px-6">
      {{ label }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  @Input({ required: true }) label: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
