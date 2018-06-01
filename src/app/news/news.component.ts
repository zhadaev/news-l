import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent {
upRate() {
  this.vote++;
}

downRate() {
  this.vote--;
}

vote = 25;

@Input() news;

}
