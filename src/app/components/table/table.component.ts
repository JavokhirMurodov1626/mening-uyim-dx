import { Component, Input } from '@angular/core';
import { StatusComponent } from '../status/status.component';
import { RouterModule } from '@angular/router';
import { Application } from '../../types/application.model';
import { RenderTableDataComponent } from './renderTableData.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [StatusComponent, RouterModule, RenderTableDataComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input({ required: true }) headers!: string[];
  @Input({ required: true }) data!: any[];
  @Input({ required: true }) columns!: string[];
  @Input({ required: true }) isLoading!: boolean;
  ngOnInit() {}
}
