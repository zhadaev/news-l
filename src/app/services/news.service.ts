import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

constructor(private http: Http) {}
  vote = 1;

  upRate() {
    this.vote++;
  }

  downRate() {
    this.vote--;
  }

  getVotes() {
    return this.vote;
  }

  getNews() {

    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());

  }

}
