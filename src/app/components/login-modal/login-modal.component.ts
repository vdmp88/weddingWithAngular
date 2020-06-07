import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit, AfterViewInit {
  @ViewChild('loginModal', { static: false }) loginModal: ModalDirective;
  @Output() onShowLogin = new EventEmitter();
  @Output() onLogin = new EventEmitter();

  public form: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }

  ngAfterViewInit(): void {
    this.loginModal.show();
  }

  hideModal(): void {
    this.onShowLogin.emit();
  }

  submit(): void {
    let user = this.form.value;
    this.login(user);
    this.form.reset();
  }

  login(user: Auth): void {
    this.authService.login(user).subscribe(
      (token) => {
        if (token.status === 200) {
          this.onLogin.emit();
          localStorage.setItem('currentUser', token.body.access_token);
          this.hideModal();
        }
      },
      (err) => {
        console.log('Failed response, try again!');
      }
    );
  }
}
