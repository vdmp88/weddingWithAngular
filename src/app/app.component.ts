import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  public modalState: boolean = false;

  ngOnInit(): void {}

  toggleModal(): void {
    this.modalState = !this.modalState;
  }
}
