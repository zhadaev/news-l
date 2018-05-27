import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent {
	upRate() {
		this.vote++
	}

	downRate() {
		this.vote--
	}
	vote: number = 25;
	@Input() news;

	 ngOnInit() {
	 	this.vote = Math.floor(Math.random() * 100 - 50) + 0;
	 }

}
