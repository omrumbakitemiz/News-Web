import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News, NewsType } from '../news';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/common/models/baseUrl';

@Injectable()
export class NewsService {

  BASE_URL = baseUrl + '/api';
  constructor(private http: HttpClient) { }

  addNews(news: News): Observable<any> {
    return this.http.post(`${this.BASE_URL}/news`, news);
  }

  getAllNews(): Observable<Array<News>> {
    return this.http.get<Array<News>>(`${this.BASE_URL}/news`);
  }

  getAllNewsTypes(): Observable<Array<NewsType>> {
    return this.http.get<Array<NewsType>>(`${this.BASE_URL}/news/newsTypes`)
  }

  deleteNews(newsId: string) {
    return this.http.delete(`${this.BASE_URL}/news/${newsId}`);
  }

  likeNews(newsId: string) {
    return this.http.get(`${this.BASE_URL}/news/like/${newsId}`);
  }

  dislikeNews(newsId: string) {
    return this.http.get(`${this.BASE_URL}/news/dislike/${newsId}`);
  }

  increaseViewCount(newsId: string) {
    return this.http.get(`${this.BASE_URL}/news/view/${newsId}`);
  }

  one(newsId: string) {
    return this.http.get(`${this.BASE_URL}/news/${newsId}`);
  }
}
