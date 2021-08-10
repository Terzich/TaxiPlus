import { Component, OnInit } from '@angular/core';
import { News } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: News[] = [];

  constructor(private newsServie: NewsService) { }

  ngOnInit(): void {
    this.newsList = this.newsServie.getNews(); 
   }

}
