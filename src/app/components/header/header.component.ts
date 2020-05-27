import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  constructor() {}

  toggle_menu() {
    document.querySelector('body').classList.toggle('overflow-h');
    return (this.isOpen = !this.isOpen);
  }

  ngOnInit(): void {}
}
