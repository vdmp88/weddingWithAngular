import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import { Section } from '../../interfaces/data.interface';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit, OnDestroy {
  public offerSectionSub: Subscription;
  public offerContent: Section;
  public isLoading: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getOfferSection();
  }

  ngOnDestroy(): void {
    this.offerSectionSub.unsubscribe();
  }

  private getOfferSection(): void {
    this.isLoading = true;
    this.dataService.getOfferSection().subscribe((data: Section) => {
      this.offerContent = data;
      this.isLoading = false;
    });
  }
}
