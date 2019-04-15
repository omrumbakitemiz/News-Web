import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignalRService } from '../../services/signal-r.service';
import { NewsService } from '../add-news/news.service';
import { News } from '../news';
import { SharedService } from '../../common/shared.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.sass']
})
export class ListNewsComponent implements OnInit, AfterViewInit {
  public allNews: Array<News>;

  constructor(
    private newsService: NewsService,
    private signalRService: SignalRService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.allNews = new Array<News>();
    this.signalRService.startConnection();
    this.signalRService.addNewNewsListener();
  }

  ngAfterViewInit() {
    this.newsService.getAllNews()
      .subscribe(allNews => this.allNews = allNews);

    this.signalRService.getNewNews()
      .subscribe(newNews => {
        this.allNews.push(newNews);
      });
  }

  onClick(news: News) {
    this.sharedService.setNews(news);
    this.router.navigate(['/news', news.id]);
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
