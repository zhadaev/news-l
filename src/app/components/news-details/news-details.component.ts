import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})

export class NewsDetailsComponent implements OnInit {
  vote: number;
  id: number;
  singleNews;
  news = [];

  constructor(private activateRoute: ActivatedRoute, private newsService: NewsService) {
    this.vote = newsService.getVotes();
    this.id = activateRoute.snapshot.params['id'];
  }

  upRate() {
    this.newsService.upRate();
    this.vote = this.newsService.getVotes();
  }

  downRate() {
    this.newsService.downRate();
    this.vote = this.newsService.getVotes();
  }


  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.singleNews = news[this.id - 1];
    });

  }

}
