import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { DanceLessonComponent } from './components/dance-lesson/dance-lesson.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { OfferComponent } from './components/offer/offer.component';
import { ServicesComponent } from './components/services/services.component';
import { CardComponent } from './components/card/card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServiceSliderComponent } from './components/service-slider/service-slider.component';
import { CoachSliderComponent } from './components/coach-slider/coach-slider.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';
import { EditContentModalComponent } from './components/edit-content-modal/edit-content-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    DanceLessonComponent,
    CoachesComponent,
    OfferComponent,
    ServicesComponent,
    CardComponent,
    LoaderComponent,
    LoginModalComponent,
    ServiceSliderComponent,
    CoachSliderComponent,
    EditContentModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
