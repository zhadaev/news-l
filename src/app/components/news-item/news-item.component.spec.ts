import { NewsService } from '../../services/news.service';
import { NewsItemComponent } from './news-item.component';

describe('NewsItemComponent', () => {

  let newsService: NewsService;
  let component: NewsItemComponent;

  beforeEach(() => {
    newsService = new NewsService(null);
    component = new NewsItemComponent(newsService);
  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be change state', () => {

    component.hoverImage(null);
    expect(component.state).toEqual('white');
    component.hoverImage('over');
    expect(component.state).toEqual('color');
    component.hoverImage('out');
    expect(component.state).toEqual('white');

  });

});

