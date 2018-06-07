import { Injectable } from '@angular/core';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root',
})

export class RatingService {
  votes = [{ id: 1, vote: 5 }, { id: 2, vote: 6 }];
  vote;
  constructor(private newsService: NewsService) {

  }

  rate(val, id) {
    if (this.votes.find(el => id === el.id)) {
      val === 'up' ? this.votes.find(el => id === el.id).vote++ : this.votes.find(el => id === el.id).vote--;
    } else {
      val === 'up' ? this.votes.push({ id, vote: 1 }) : this.votes.push({ id, vote: -1 });
    }
  }

  getRate() {
    return this.votes;
  }




}
