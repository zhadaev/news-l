import { NewsService } from '../../services/news.service';
import { NewsListComponent } from './news-list.component';

describe('NewsListComponent', () => {

  let newsService: NewsService;
  let component: NewsListComponent;

  beforeEach(() => {
    newsService = new NewsService(null);
    component = new NewsListComponent(newsService, null, null);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
