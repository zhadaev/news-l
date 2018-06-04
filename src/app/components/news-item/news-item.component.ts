import { Component, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent {

  vote;
  upRate;
  downRate;

  constructor(private newsService: NewsService) {
    this.vote = newsService.vote;
    this.upRate = newsService.upRate;
    this.downRate = newsService.downRate;
  }

  @Input() news;


}
