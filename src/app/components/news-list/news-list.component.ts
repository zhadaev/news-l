import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component ({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  searchForm: FormControl;
  news = [];
  searchStr = '';

  constructor(private newsService: NewsService, private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.initForm();
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    });
    this.searchForm.valueChanges.subscribe(value => {
      this.searchStr = value.toLowerCase();
    });

  }

  initForm() {
    this.searchForm = this.formBuilder.control('', Validators.required);
  }


}
