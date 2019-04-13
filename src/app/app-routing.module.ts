import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewsComponent } from './news/add-news/add-news.component';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';

const routes: Routes = [
  { path: '', component: ListNewsComponent },
  { path: 'list', component: ListNewsComponent },
  { path: 'new', component: AddNewsComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: '**', component: ListNewsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
