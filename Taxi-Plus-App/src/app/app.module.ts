import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-list/news-detail/news-detail.component';
import { NewsService } from './news-list/news.service';
import { FaqComponent } from './faq/faq.component';
import { FaqService } from './faq/faq.service';
import { CompanyOfferComponent } from './company-offer/company-offer.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-list/car-details/car-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentCarComponent } from './car-list/rent-car/rent-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomepageComponent,
    NewsListComponent,
    NewsDetailComponent,
    FaqComponent,
    CompanyOfferComponent,
    CarListComponent,
    CarDetailsComponent,
    RentCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AppRoutingModule, NewsService, FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
