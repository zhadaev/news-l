import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component ({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news = [];
  searchStr = '';

  constructor(private newsService: NewsService) {}



  ngOnInit() {

  this.newsService.getNews().subscribe(news => {
    this.news = news;
  });
  }

}
