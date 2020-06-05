import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import { Section } from '../../interfaces/data.interface';

@Component({
  selector: 'app-dance-lesson',
  templateUrl: './dance-lesson.component.html',
  styleUrls: ['./dance-lesson.component.scss'],
})
export class DanceLessonComponent implements OnInit, OnDestroy {
  public infoSub: Subscription;
  public infoContent: Section;
  public isLoading: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getInfoSection();
  }

  ngOnDestroy(): void {
    this.infoSub.unsubscribe();
  }

  private getInfoSection(): void {
    this.isLoading = true;
    this.infoSub = <Subscription>(
      this.dataService.getInfoSection().subscribe((data: Section) => {
        this.infoContent = data;
        this.isLoading = false;
      })
    );
  }
}
