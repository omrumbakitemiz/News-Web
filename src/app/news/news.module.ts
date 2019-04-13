import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';

import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';

import { HeaderComponent } from '../header/header.component';

import { NewsService } from './add-news/news.service';
import { SignalRService } from '../services/signal-r.service';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SharedService } from '../common/shared.service';

@NgModule({
  declarations: [AddNewsComponent, HeaderComponent, ListNewsComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    AddNewsComponent,
    ListNewsComponent,
    NewsDetailComponent,
    HeaderComponent
  ],
  providers: [NewsService, SharedService, SignalRService]
})
export class NewsModule {}
