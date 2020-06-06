import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription, Subscribable } from 'rxjs';
import { Section } from '../../interfaces/data.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isOpen: boolean = false;
  public isLoading: boolean;
  public navigationSub: Subscription;
  public navigationContent: Section;
  public isMobile: boolean;
  public breakpoint: number = 768;

  @Output() onButtonClick = new EventEmitter();

  constructor(private dataService: DataService) {}

  toggle_menu(): boolean {
    return (this.isOpen = !this.isOpen);
  }

  checkScreenSize() {
    if (window.innerWidth <= this.breakpoint) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngOnInit(): void {
    this.getNavigation();
    this.checkScreenSize();
  }

  ngOnDestroy(): void {
    this.navigationSub.unsubscribe();
  }

  showModal(): void {
    this.onButtonClick.emit();
  }

  private getNavigation(): void {
    this.isLoading = true;
    this.navigationSub = <Subscription>(
      this.dataService.getNavigation().subscribe((data: Section) => {
        this.navigationContent = data;
        this.isLoading = false;
      })
    );
  }
}
