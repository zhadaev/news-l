import { Component, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent {

  @Input() news;

  constructor(private newsService: NewsService) {

  }

}
