import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  news = [];
  searchStr = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {

  	this.newsService.getNews().subscribe(news => {
  		this.news = news;
  	})
  }

}
