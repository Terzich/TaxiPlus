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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomepageComponent,
    NewsListComponent,
    NewsDetailComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AppRoutingModule, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
