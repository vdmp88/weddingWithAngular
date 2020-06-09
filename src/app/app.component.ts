import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  public loginModalState: boolean = false;
  public editModalState: boolean = false;
  public isLogin: boolean = false;

  ngOnInit(): void {
    this.checkAuth();
  }

  toggleLoginModal(): void {
    this.loginModalState = !this.loginModalState;
  }

  toggleEditModal(): void {
    this.editModalState = !this.editModalState;
  }

  successLogin(): void {
    this.isLogin = true;
  }

  checkAuth(): void {
    localStorage.currentUser ? (this.isLogin = true) : false;
  }
}
