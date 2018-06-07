import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

constructor(private http: Http) {}

  getNews() {

    return this.http.get('http://localhost:3500/news/')
      .map(response => response.json());

  }

}
