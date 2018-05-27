import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

	constructor(private http: Http) {

	}

	upRate() {
		this.vote++
	}

	downRate() {
		this.vote--
	}
	
	vote: number = 25;

	getNews() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
		.map(function(response){
			return response.json();
		})
	}

}