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
  constructor(private dataService: DataService) {}
  public modalState: boolean = false;

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  toggleModal(event: boolean): void {
    this.modalState = event;
  }
}
