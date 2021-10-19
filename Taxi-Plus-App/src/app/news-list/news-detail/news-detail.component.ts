import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  id: number;
  news: News;
  newsList:News[];

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.newsService.getNewsById(this.id).subscribe(newsFromApi => this.news = newsFromApi);
      }

    );
    this.newsService.getNews().subscribe(newsFromApi => this.newsList = newsFromApi);
  }

}
