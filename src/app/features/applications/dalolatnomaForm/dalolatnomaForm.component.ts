import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { getBase64 } from '../../../utils/base64';
import { ModalComponent } from '../../../components/modal/modal.component';

@Component({
  selector: 'app-dalolatnomaForm',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './dalolatnomaForm.component.html',
  styleUrls: ['./dalolatnomaForm.component.scss'],
})
export class DalolatnomaFormComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) isModalOpen!: boolean;
  @Output() onClose = new EventEmitter<boolean>();
  @ViewChild('f') form!: NgForm;

  filename = '';
  formData: { meter_number: number; file: string } = {
    meter_number: 0,
    file: '',
  };

  reset() {
    this.form.reset();
    this.filename = '';
    this.formData.file = '';
    this.formData.meter_number = 0;
    this.closeModal();
  }

  onSubmit() {
    const data = {
      ...this.formData,
      meter_number: this.form.form.value.meter_number,
    };

    console.log(data);
    // resetting after submit
    // this.reset();
  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;
    const file: File = target.files[0];
    //setting filename to custom file input
    if (file) this.filename = file.name;
    //return base64 of file
    getBase64(file).then((base64) => {
      this.formData.file = base64;
    });
  }

  closeModal() {
    this.onClose.emit();
  }
}
