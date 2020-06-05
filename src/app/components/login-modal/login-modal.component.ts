import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit, AfterViewInit {
  @ViewChild('loginModal', { static: false }) loginModal: ModalDirective;
  @Output() onButtonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loginModal.show();
  }

  hideModal(): void {
    this.onButtonClick.emit(false);
  }
}
