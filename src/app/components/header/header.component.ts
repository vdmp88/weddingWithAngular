import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription, Subscribable } from 'rxjs';
import { Section } from '../../interfaces/Data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isOpen: boolean = false;
  public isLoading: boolean;
  public navigationSub: Subscription;
  public navigationContent: Section;
  public isMobile: boolean;
  public breakpoint: number = 768;

  constructor(private renderer: Renderer2, private dataService: DataService) {}

  toggle_menu(): boolean {
    !this.isOpen
      ? this.renderer.addClass(document.body, 'overflow-h')
      : this.renderer.removeClass(document.body, 'overflow-h');
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
