import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from '../news/news';

@Injectable()
export class SharedService {

  private news = new BehaviorSubject<News>(new News());
  currentNews = this.news.asObservable();

  setNews(news: News) {
    this.news.next(news);
  }
}
