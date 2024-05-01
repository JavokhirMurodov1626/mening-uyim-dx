import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() labelKey = 'label';
  @Input() idKey = 'id';
  @Input() options = [];
  @Input() model:any;

  originalOptions: any[] = [];

  ngOnInit() {
    this.originalOptions = [...this.options];
    if (this.model !== undefined) {
      this.model = this.options.find(
        currentOption => currentOption[this.idKey] === this.model
      );
    }
  }
   
  get label() {
    return this.model ? this.model[this.labelKey] : 'Select...';
  }
}
