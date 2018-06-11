import { NewsService } from './news.service';
import { Http } from '@angular/http';

describe('NewsService', () => {
  it('should be create an instance of NewsService', () => {
    expect(new NewsService(null)).toBeTruthy();
  });
});
