import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private httpService: HttpService) {}

  fetchApplications() {
    const data = {
      lis: 1,
    };

    return this.httpService.postData(data, 'tasklist').pipe(
      map((res: any) => {
        console.log(res, 'res');
        const list = res.data;
        const applications = list.map((item: any) => {
          return {
            id: item.id,
            application_number: item.task_id,
            applicant_type: item.json_body.user_type.value,
            applicant_name: item.json_body.full_name_fiz.value,
            applicant_address: item.json_body.address_water_meter.value,
            verification_date: item.current_date,
            status: item.status,
            process: item.current_node,
          };
        });

        return applications;
      })
    );
  }
}
