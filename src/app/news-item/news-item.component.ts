import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent {
  vote = 0;

  @Input() news;

  upRate() {
    this.vote++;
  }

  downRate() {
    this.vote--;
  }

}
