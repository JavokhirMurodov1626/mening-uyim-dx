import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  cancelBtnIcon = faXmark;

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) isModalOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.close.emit();
  }
}
