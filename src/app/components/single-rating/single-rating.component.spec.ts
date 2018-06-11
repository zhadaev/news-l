import { RatingService } from './../../services/rating.service';
import { SingleRatingComponent } from './single-rating.component';

describe('SingleRatingComponent', () => {

  let ratingService: RatingService;
  let component: SingleRatingComponent;

  beforeEach(() => {
    ratingService = new RatingService();
    component = new SingleRatingComponent(ratingService);
  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be use a rate method', () => {

    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);

  });

});
