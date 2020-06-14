import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Section } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class OfferDataService {
  constructor() {}

  public data: Subject<Section> = new Subject();

  public updateData(data: Section): void {
    this.data.next(data);
  }
}
