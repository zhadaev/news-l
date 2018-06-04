import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})

export class NewsDetailsComponent implements OnInit {
  vote = 0;
  id: number;
  singleNews;
  news = [];

  constructor(private activateRoute: ActivatedRoute, private newsService: NewsService) {
    this.id = activateRoute.snapshot.params['id'];
  }


  upRate() {
    this.vote++;
  }

  downRate() {
    this.vote--;
  }



  ngOnInit() {

    this.newsService.getNews().subscribe(news => {
      this.singleNews = news[this.id - 1];
    });

  }

}
