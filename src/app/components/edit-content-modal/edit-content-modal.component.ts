import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-content-modal',
  templateUrl: './edit-content-modal.component.html',
  styleUrls: ['./edit-content-modal.component.scss'],
})
export class EditContentModalComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  @Output() onShowEdit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.editModal.show();
  }

  hideEditModal(): void {
    this.onShowEdit.emit();
  }
}
