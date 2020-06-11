import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DataService } from '../../service/data.service';
import { OfferDataService } from '../../service/offer-data.service';
import { Subscription } from 'rxjs';
import { Section } from '../../interfaces/data.interface';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-content-modal',
  templateUrl: './edit-content-modal.component.html',
  styleUrls: ['./edit-content-modal.component.scss'],
})
export class EditContentModalComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  @Output() onShowEdit = new EventEmitter();

  public editContentSub: Subscription;
  public editContent: any;
  public isLoading: boolean;
  public editForm: FormGroup;

  constructor(
    private dataService: DataService,
    private offerDataService: OfferDataService
  ) {}

  ngOnInit(): void {
    this.getEditableContent();
  }

  ngAfterViewInit(): void {
    this.editModal.show();
  }

  ngOnDestroy(): void {
    this.editContentSub.unsubscribe();
  }

  hideEditModal(): void {
    this.onShowEdit.emit();
  }

  submitForm(): void {
    this.editContent.meta.title = this.editForm.value.title;
    this.editContent.meta.description = this.editForm.value.description;
    this.editContent.content = this.editForm.value.content;

    this.dataService.updateConten(this.editContent).subscribe(() => {
      this.offerDataService.updateData(this.editContent);
      this.hideEditModal();
    });
  }

  createForm(): void {
    const content: FormArray = new FormArray([]);
    this.editContent.content.forEach((item) =>
      content.push(
        new FormGroup({
          title: new FormControl(item.title),
          url: new FormControl(item.url),
        })
      )
    );

    this.editForm = new FormGroup({
      title: new FormControl(this.editContent.meta.title),
      description: new FormControl(this.editContent.meta.description),
      content,
    });
  }

  private getEditableContent(): void {
    this.isLoading = true;
    this.editContentSub = <Subscription>(
      this.dataService.getOfferSection().subscribe((data: Section) => {
        this.editContent = data;
        this.isLoading = false;
        this.createForm();
      })
    );
  }
}
