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

  it('should be call a rate method', () => {

    spyOn(component, 'rate');
    component.rate('up', 2);
    expect(component.rate).toHaveBeenCalled();


  });
  it('should be called a rate method with the correct arguments', () => {

    spyOn(component, 'rate');

    component.rate('up', 2);
    expect(component.rate).toHaveBeenCalledWith('up', 2);

    component.rate('down', 1);
    expect(component.rate).toHaveBeenCalledWith('down', 1);

  });

});
