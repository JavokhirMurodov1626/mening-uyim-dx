import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Application } from '../../types/application.model';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'renderTableData',
  standalone: true,
  imports: [RouterModule, StatusComponent],
  template: `
    @if(column.split('/')[1] === 'link'){
    <div>
      <a [routerLink]="getColumnValue(column, item)" class="text-customBlue">
        {{ getColumnValue(column, item) }}
      </a>
      <span class="block text-[#8F8DA2] text-xs">{{
        item.verification_date
      }}</span>
    </div>
    } @else if(column.split('/')[1] === 'name-block'){
    <div>
      <a href="#" class="text-[#2E343E] font-InterMedium">
        {{ getColumnValue(column, item) }}
      </a>
      <span class="block text-[#8F8DA2] text-xs">{{
        item.applicant_type
      }}</span>
    </div>
    } @else if(column.split('/')[1] === 'status'){
    <app-status [status]="getColumnValue(column, item)" />
    } @else {
    <span>{{ getColumnValue(column, item) }}</span>
    }
  `,
  styles: ``,
})
export class RenderTableDataComponent {
  @Input({ required: true }) column!: string;
  @Input({ required: true }) item!: Application;
  constructor() {}

  getColumnValue(column: string, item: Application): any {
    const parts = column.split('/');

    if (parts[1] === 'link') {
      return item[parts[0]];
    } else if (parts[1] === 'name-block') {
      return item[parts[0]];
    } else if (parts[1] === 'status') {
      return item[parts[0]];
    } else {
      return item[parts[0]];
    }
  }
}
