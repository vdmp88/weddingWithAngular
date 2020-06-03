import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import { Section } from '../../interfaces/Data';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss'],
})
export class CoachesComponent implements OnInit, OnDestroy {
  public coachSub: Subscription;
  public coachContent: Section;
  public isLoading: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCoachContent();
  }

  ngOnDestroy(): void {
    this.coachSub.unsubscribe();
  }

  getCoachContent() {
    this.isLoading = true;
    this.coachSub = <Subscription>(
      this.dataService.getCoachSection().subscribe((data: Section) => {
        this.coachContent = data;
        this.isLoading = false;
      })
    );
  }
}
