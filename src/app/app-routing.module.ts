import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewsComponent } from './news/add-news/add-news.component';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsGuard } from './news/news.guard';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: ListNewsComponent, canActivate: [NewsGuard] },
  { path: 'list', component: ListNewsComponent, canActivate: [NewsGuard] },
  { path: 'new', component: AddNewsComponent, canActivate: [NewsGuard] },
  { path: 'news/:id', component: NewsDetailComponent, canActivate: [NewsGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: ListNewsComponent, canActivate: [NewsGuard] },
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
