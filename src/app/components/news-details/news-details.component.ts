import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
  providers: [News]
})

export class NewsDetailsComponent implements OnInit {
  id: number;
  singleNews: News;
  news = [];

  constructor(private activateRoute: ActivatedRoute, private newsService: NewsService) {
    this.id = +activateRoute.snapshot.params['id'];
  }


  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.singleNews = news.find(elem => elem.id === this.id);
    });

  }

}
