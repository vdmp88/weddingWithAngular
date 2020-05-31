import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './service/data.service';
import { Subscription } from 'rxjs';
import { Section } from './interfaces/Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public infoSectionSub: Subscription;
  public serviceSectionSub: Subscription;
  public coachSectionSub: Subscription;
  public offerSectionSub: Subscription;
  public infoContent: Section;
  public serviceContent: Section;
  public coachContent: Section;
  public offerContent: Section;
  public isLoading: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getInfoSection();
    this.getServiceSection();
    this.getCoachSection();
    this.getOfferSection();
  }

  ngOnDestroy(): void {
    this.infoSectionSub.unsubscribe();
    this.serviceSectionSub.unsubscribe();
    this.coachSectionSub.unsubscribe();
    this.offerSectionSub.unsubscribe();
  }

  private getInfoSection(): void {
    this.isLoading = true;
    this.infoSectionSub = <Subscription>(
      this.dataService.getInfoSection().subscribe((data: Section) => {
        this.infoContent = data;
        this.isLoading = false;
      })
    );
  }

  private getServiceSection(): void {
    this.isLoading = true;
    this.serviceSectionSub = <Subscription>(
      this.dataService.getServiceSection().subscribe((data: Section) => {
        this.serviceContent = data;
        this.isLoading = false;
      })
    );
  }

  private getCoachSection(): void {
    this.isLoading = true;
    this.coachSectionSub = <Subscription>(
      this.dataService.getCoachSection().subscribe((data: Section) => {
        this.coachContent = data;
        this.isLoading = false;
      })
    );
  }

  private getOfferSection(): void {
    this.isLoading = true;
    this.offerSectionSub = <Subscription>(
      this.dataService.getOfferSection().subscribe((data: Section) => {
        this.offerContent = data;
        this.isLoading = false;
      })
    );
  }
}
