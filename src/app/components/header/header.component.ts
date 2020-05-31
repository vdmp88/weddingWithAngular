import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  constructor(private renderer: Renderer2) {}

  toggle_menu() {
    !this.isOpen
      ? this.renderer.addClass(document.body, 'overflow-h')
      : this.renderer.removeClass(document.body, 'overflow-h');
    return (this.isOpen = !this.isOpen);
  }

  ngOnInit(): void {}
}
