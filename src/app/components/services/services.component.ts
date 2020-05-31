import { Component, OnInit, OnDestroy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import { Section } from '../../interfaces/Data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public serviceSectionSub: Subscription;
  public serviceContent: Section;
  public isLoading: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getServiceSection();
  }

  ngOnDestroy(): void {
    this.serviceSectionSub.unsubscribe();
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

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navText: ['', ''],
    rewind: true,
    dots: false,
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1.5,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      991: {
        items: 3,
      },
    },
  };
}
