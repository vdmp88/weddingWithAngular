import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../interfaces/Data';

@Component({
  selector: 'app-dance-lesson',
  templateUrl: './dance-lesson.component.html',
  styleUrls: ['./dance-lesson.component.scss'],
})
export class DanceLessonComponent implements OnInit {
  constructor() {}

  @Input() sectionContent: any;
  @Input() isLoading: boolean;

  ngOnInit(): void {
    this.loading;
  }

  get loading() {
    console.log(this.isLoading);
    return this.isLoading;
  }
}
