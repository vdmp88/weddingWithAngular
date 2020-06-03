import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.scss'],
})
export class ServiceSliderComponent implements OnInit {
  constructor() {}

  @Input() sliderContent: any;

  ngOnInit(): void {}

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
