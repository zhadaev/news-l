import { Component, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  animations: [
    trigger('animate', [
      state('white', style({
        background: '#fff'
      })),
      state('color', style({
        background: '#283593',
        color: '#f9f9f9'
      })),
      transition('white <=> color', animate('.35s ease')),
    ]),
  ]
})

export class NewsItemComponent {
  state = 'white';
  @Input() news;

  constructor(private newsService: NewsService) {

  }

  hoverImage(action: string) {
    if (action === 'over') {
      this.state = 'color';
    } else if (action === 'out') {
      this.state = 'white';
    }

  }
}
