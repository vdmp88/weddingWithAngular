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
import { DataService } from './service/data.service';
import { LoaderComponent } from './components/loader/loader.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
