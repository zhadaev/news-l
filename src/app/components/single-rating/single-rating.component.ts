import { Component, OnInit, Input } from '@angular/core';
import { RatingService } from './../../services/rating.service';

@Component({
  selector: 'app-single-rating',
  templateUrl: './single-rating.component.html',
  styleUrls: ['./single-rating.component.scss']
})
export class SingleRatingComponent implements OnInit {
  votes = {
    vote: 0
  };

  @Input() id;

  constructor(private ratingService: RatingService) {
  }

  ngOnInit() {
    this.votes = this.ratingService.getRate().find(el => this.id === el.id);
  }

  upRate(id) {
    this.ratingService.upRate(id);

    if (this.votes === undefined) {

      this.votes = {
        vote: 1
      };

      this.votes = this.ratingService.getRate().find(el => this.id === el.id);
    }
  }

  downRate(id) {
    this.ratingService.downRate(id);

    if (this.votes === undefined) {

      this.votes = {
        vote: -1
      };

      this.votes = this.ratingService.getRate().find(el => this.id === el.id);
    }
  }

}
