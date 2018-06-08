import { News } from './news.model';

describe('NewsModel', () => {
  it('should create an instance of News', () => {
    expect(new News()).toBeTruthy();
  });
  it('should accept values a news.model', () => {
    let news = new News();
    news = {
      userId: 111,
      id: 11,
      title: 'Hello world',
      body: 'Ruby',
      image: '',
    };
    expect(news.userId).toEqual(111);
    expect(news.id).toEqual(11);
    expect(news.body).toEqual('Ruby');
    expect(news.title).toEqual('Hello world');
  });
});
