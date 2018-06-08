import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root',
})

export class MockRatingService {

  votes = [{ id: 1, vote: 5 }, { id: 2, vote: 6 }];

  rate(val, id) {}

  getRate() {
    return [];
  }




}
