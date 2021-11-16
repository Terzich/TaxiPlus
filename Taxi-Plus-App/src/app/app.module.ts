import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { CarMenuComponent } from './admin-panel/car-menu/car-menu.component';
import { AddEditCarComponent } from './admin-panel/car-menu/add-edit-car/add-edit-car.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsMenuComponent } from './admin-panel/news-menu/news-menu.component';
import { AddEditNewsComponent } from './admin-panel/news-menu/add-edit-news/add-edit-news.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ToastrModule } from 'ngx-toastr';
import { QuestionMenuComponent } from './admin-panel/question-menu/question-menu.component';
import { AnswerQuestionComponent } from './admin-panel/question-menu/answer-question/answer-question.component';


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
    RentCarComponent,
    AdminPanelComponent,
    DashboardComponent,
    CarMenuComponent,
    AddEditCarComponent,
    NotFoundComponent,
    NewsMenuComponent,
    AddEditNewsComponent,
    UserPanelComponent,
    QuestionMenuComponent,
    AnswerQuestionComponent
  ],
  imports: [
    BrowserModule,
    ImageCropperModule, 
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AppRoutingModule, NewsService, FaqService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
