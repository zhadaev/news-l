import { NewsService } from '../../services/news.service';
import { NewsDetailsComponent } from './news-details.component';

describe('NewsDetailsComponent', () => {

  let newsService: NewsService;
  let component: NewsDetailsComponent;

  beforeEach(() => {
    newsService = new NewsService(null);
    component = new NewsDetailsComponent(null, newsService);
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });

});
