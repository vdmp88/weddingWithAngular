import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() textContent: string;
  @Input() classList: string;
  @Input() imgPath: string;
  @Input() disabled: any;
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {}
}
