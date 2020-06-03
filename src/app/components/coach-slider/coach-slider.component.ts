import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-coach-slider',
  templateUrl: './coach-slider.component.html',
  styleUrls: ['./coach-slider.component.scss'],
})
export class CoachSliderComponent implements OnInit {
  public isMobile: boolean;
  public breakpoint: number = 768;

  @Input() sliderContent;

  constructor() {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= this.breakpoint) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
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
        items: 1,
      },
      576: {
        items: 1,
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
