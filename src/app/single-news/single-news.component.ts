import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {

	id: number;

    constructor(private activateRoute: ActivatedRoute, private newsService: NewsService){
         
        this.id = activateRoute.snapshot.params['id'];
    }
    singleNews;
    news = [];
    upRate() {
		this.vote++
	}

	downRate() {
		this.vote--
	}
	
	vote: number = 25;

	ngOnInit() {

	 	this.vote = Math.floor(Math.random() * 100 - 50) + 0;
		this.newsService.getNews().subscribe(news => {
			this.news = news;
			this.singleNews = news[this.id - 1];
			
		})
	}

}
