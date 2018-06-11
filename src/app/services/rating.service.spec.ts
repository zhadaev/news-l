import { RatingService } from './rating.service';

describe('RatingService', () => {
  it('should create an instance of RatingService', () => {
    expect(new RatingService()).toBeTruthy();
  });
  it('should be change votes', () => {
    const ratingService = new RatingService();
    ratingService.rate('up', 3);
    expect(ratingService.votes).toEqual([{ id: 1, vote: 5 }, { id: 2, vote: 6 }, { id: 3, vote: 1 }]);
    ratingService.rate('down', 4);
    expect(ratingService.votes).toEqual([{ id: 1, vote: 5 }, { id: 2, vote: 6 }, { id: 3, vote: 1 }, { id: 4, vote: -1}]);
    ratingService.rate('up', 1);
    expect(ratingService.votes).toEqual([{ id: 1, vote: 6 }, { id: 2, vote: 6 }, { id: 3, vote: 1 }, { id: 4, vote: -1 }]);
    ratingService.rate('down', 2);
    expect(ratingService.votes).toEqual([{ id: 1, vote: 6 }, { id: 2, vote: 5 }, { id: 3, vote: 1 }, { id: 4, vote: -1 }]);
  });
});
