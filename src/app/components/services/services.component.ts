import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

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
