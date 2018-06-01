import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news = [];
  searchStr = '';

  constructor(private newsService: NewsService) {}

  searchFocus($event) {
    const target = $event.target;
    target.innerHTML = 'Поиск';
  }

  ngOnInit() {

  this.newsService.getNews().subscribe(news => {
    this.news = news;
  });
  }

}
