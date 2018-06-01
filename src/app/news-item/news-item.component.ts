import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent {
  upRate() {
    this.vote++;
  }

  downRate() {
    this.vote--;
  }

  // tslint:disable-next-line:member-ordering
  vote = 0;

  // tslint:disable-next-line:member-ordering
  @Input() news;

}
