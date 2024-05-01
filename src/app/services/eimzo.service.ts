import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as imzoService from '../../assets/js/useEimzo'; // Assuming this is a custom service for interacting with the EImzo library
import { HttpService } from './http.service';

export interface Certificate {
  alias: string;
  disk: string;
  inn: string;
  name: string;
  parsedAlias: {
    '1.2.860.3.16.1.1': string;
    '1.2.860.3.16.1.2': string;
    businesscategory: string;
    c: string;
    cn: string;
    l: string;
    name: string;
    serialnumber: string;
    st: string;
    surname: string;
    validfrom: string;
    validto: string;
  };
  path: string;
  serialNumber: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
    
export class EImzoService {
  constructor(private http: HttpService) {}

  getChallenge() {
    return this.http.fetchData('challenge');
    }
    
}
