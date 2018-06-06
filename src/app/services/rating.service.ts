import { Injectable } from '@angular/core';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  votes = [{ id: 1, vote: 5 }, { id: 2, vote: 6 }];
  vote;
  constructor(private newsService: NewsService) {

  }

  upRate(id) {

    if (this.votes.find(el => id === el.id)) {
      this.votes.find(el => id === el.id).vote++;
    } else {
      this.votes.push({ id, vote: 1 });
    }
    console.log(this.votes);


  }

  downRate(id) {
     if (this.votes.find(el => id === el.id)) {
      this.votes.find(el => id === el.id).vote--;
    } else {
      this.votes.push({ id, vote: -1 });
    }
    console.log(this.votes);

  }

  getRate() {
    return this.votes;
  }




}
