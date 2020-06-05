import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import { Section } from '../../interfaces/data.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, OnDestroy {
  public serviceSub: Subscription;
  public serviceContent: Section;
  public isLoading: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getServiceSection();
  }

  ngOnDestroy(): void {
    this.serviceSub.unsubscribe();
  }

  private getServiceSection(): void {
    this.isLoading = true;
    this.serviceSub = <Subscription>(
      this.dataService.getServiceSection().subscribe((data: Section) => {
        this.serviceContent = data;
        this.isLoading = false;
      })
    );
  }
}
