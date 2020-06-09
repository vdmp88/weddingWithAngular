import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../interfaces/data.interface';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string =
    'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  getNavigation(): Observable<Section> {
    return this.httpClient.get<Section>(
      `${this.baseUrl}/app/api/v1/section/navigation`
    );
  }

  getInfoSection(): Observable<Section> {
    return this.httpClient.get<Section>(
      `${this.baseUrl}/app/api/v1/section/info`
    );
  }

  getServiceSection(): Observable<Section> {
    return this.httpClient.get<Section>(
      `${this.baseUrl}/app/api/v1/section/service`
    );
  }

  getCoachSection(): Observable<Section> {
    return this.httpClient.get<Section>(
      `${this.baseUrl}/app/api/v1/section/coach`
    );
  }

  getOfferSection(): Observable<Section> {
    return this.httpClient.get<Section>(
      `${this.baseUrl}/app/api/v1/section/offer`
    );
  }

  updateConten(content: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('currentUser'),
      }),
    };
    return this.httpClient.put(
      `${this.baseUrl}/app/api/v1/section/offer`,
      content,
      httpOptions
    );
  }
}
