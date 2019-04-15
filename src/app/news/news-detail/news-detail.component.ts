import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../add-news/news.service';
import { SharedService } from '../../common/shared.service';

import { News } from '../news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.sass']
})
export class NewsDetailComponent implements OnInit {
  selectedNews: News;

  constructor(
    private newsService: NewsService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sharedService.currentNews.subscribe(news => this.selectedNews = news);

    if (!this.selectedNews) {
      console.log('route:', this.route);
    }

    this.newsService.increaseViewCount(this.selectedNews.id)
      .subscribe(news => {
        this.selectedNews = news;
      });
  }

  onLike(selectedNews: News) {
    this.newsService.likeNews(selectedNews.id)
      .subscribe(news => selectedNews = news);
  }

  onDislike(selectedNews: News) {
    this.newsService.dislikeNews(selectedNews.id)
      .subscribe(news => selectedNews = news);
  }

  onDelete(selectedNews: News) {
    this.newsService.deleteNews(selectedNews.id)
      .subscribe(() => {});
  }
}
