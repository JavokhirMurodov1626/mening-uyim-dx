import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ToastrService } from 'ngx-toastr';

interface ResponseData {
  code: number;
  data: any;
  errors: string | null;
  message: string | undefined;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  fetchData(slug: string) {
    return this.httpClient
      .get<ResponseData>(`${environment.apiUrl}/${slug}`)
      .pipe(
        tap((res) => this.innerErrorHandler(res)),
        catchError((errResponse) => this.errorHandler(errResponse))
      );
  }

  updateData(data: any, slug: string) {
    return this.httpClient
      .put(`${environment.apiUrl}/${slug}`, data)
      .pipe(catchError((errResponse) => this.errorHandler(errResponse)));
  }

  deleteData(data: any, slug: string) {
    return this.httpClient
      .delete(`${environment.apiUrl}/${slug}`, data)
      .pipe(catchError((errResponse) => this.errorHandler(errResponse)));
  }

  postData(data: any, slug: string, haveToastr?: boolean) {
    return this.httpClient
      .post<ResponseData>(`${environment.apiUrl}/${slug}`, data)
      .pipe(
        tap((res) => this.innerErrorHandler(res, haveToastr)),
        catchError((errResponse) => this.errorHandler(errResponse))
      );
  }

  errorHandler(errResponse: HttpErrorResponse) {
    const errorMsg = errResponse?.message || 'Kutilmagan xatolik!';
    this.toastr.error(errorMsg);
    return throwError(() => new Error(errorMsg));
  }

  innerErrorHandler(res: ResponseData, haveToastr?: boolean) {
    if (res.code === 401) {
      const error: any = new Error(
        `Sessiya tugadi, iltimos qayta kirishni urinib ko'ring!`
      );
      error.timestamp = Date.now();
      throw error;
    } else if (res.code === 200) {
      if (haveToastr) {
        this.toastr.success('Muvaffaqiyatli amalga oshirildi!');
      }
      return res;
    } else {
      const error: any = new Error(`Kutilmagan xatolik!`);
      error.timestamp = Date.now();
      throw error;
    }
  }
}
