import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfferDataService {
  constructor() {}

  public data: Subject<any> = new Subject();

  public updateData(data): void {
    this.data.next(data);
  }
}
