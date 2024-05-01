import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class OrgsService {
  constructor(private http: HttpService) {}

  fetchOrgs() {
    return this.http.fetchData('listorg');
  }

  fetchRegions() {
    const data = {
      lis: 1,
    };

    return this.http.postData(data, 'region');
  }
}
