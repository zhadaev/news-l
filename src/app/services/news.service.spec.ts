import { NewsService } from './news.service';
import { Http } from '@angular/http';

describe('News', () => {
  it('should create an instance of NewsService', () => {
    expect(new NewsService(null)).toBeTruthy();
  });
});
