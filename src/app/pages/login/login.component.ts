import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../services/eimzo.service';
import * as imzoService from '../../../assets/js/useEimzo';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgSelectModule, FormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('selectComponent') selectElement!: ElementRef;
  selectedCar!: number;
  certificates: Certificate[] = [];


  ngOnInit() {
    imzoService.getAllCertificates().then((certs: Certificate[]) => {
      this.certificates = certs;
    });
  }

  customSearchFn(term: string, item: Certificate) {
    term = term.toLocaleLowerCase();
    return (
      item.inn.toLocaleLowerCase().indexOf(term) > -1 ||
      item.parsedAlias.cn.toLocaleLowerCase().indexOf(term) > -1 ||
      item.serialNumber.toLocaleLowerCase().indexOf(term) > -1
    );
  }
}
