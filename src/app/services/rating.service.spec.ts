import { RatingService } from './rating.service';

describe('RatingService', () => {
  it('should create an instance of RatingService', () => {
    expect(new RatingService()).toBeTruthy();
  });
  it('should accept values rating.service.ts', () => {
    const ratingService = new RatingService();
    ratingService.rate('up', 3);
    ratingService.rate('down', 4);
    ratingService.rate('up', 1);
    ratingService.rate('down', 2);
    ratingService.rate('up', 4);
    ratingService.rate('up', 4);
    expect(ratingService.votes).toEqual([{ id: 1, vote: 6 }, { id: 2, vote: 5 }, { id: 3, vote: 1 }, { id: 4, vote: 1 }]);
    // expect(news.id).toEqual(11);
    // expect(news.body).toEqual('Ruby');
    // expect(news.title).toEqual('Hello world');
  });
});
