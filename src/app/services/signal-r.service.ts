import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { BehaviorSubject, Observable } from 'rxjs';
import { News } from '../news/news';

@Injectable()
export class SignalRService {
  news = new BehaviorSubject<News>(null);

  public newNews: Array<any>;
  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://immino-news-api.herokuapp.com/newsHub')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection Started'))
      .catch(err => console.log('error:', err));
  }

  public addNewNewsListener = () => {
    this.hubConnection.on('AddNews', newNews => {
      this.newNews = newNews;
      this.news.next(newNews);
    });
  }

  getNewNews(): Observable<News> {
    return this.news.asObservable();
  }
}
