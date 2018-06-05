import { Component, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent {

  public vote;

  @Input() news;

  constructor(private newsService: NewsService) {
    this.vote = newsService.getVotes();

  }

  upRate() {
    this.newsService.upRate();
    this.vote = this.newsService.getVotes();
  }

  downRate() {
    this.newsService.downRate();
    this.vote = this.newsService.getVotes();
  }




}
