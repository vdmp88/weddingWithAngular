import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string =
    'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  getInfoSection(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/app/api/v1/section/info`);
  }

  getServiceSection(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/app/api/v1/section/service`);
  }

  getCoachSection(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/app/api/v1/section/coach`);
  }

  getOfferSection(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/app/api/v1/section/offer`);
  }
}
