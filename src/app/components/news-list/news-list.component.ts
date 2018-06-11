import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(private newsService: NewsService, private formBuilder: FormBuilder, private elementRef: ElementRef) {}


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
    console.log(this.searchForm);
  }

  formChange(val) {
    if (val === 'focus') {
      this.elementRef.nativeElement.querySelector('#items-content').classList.add('overlay');
    } else if (val === 'blur') {
      this.elementRef.nativeElement.querySelector('#items-content').classList.remove('overlay');
    }
  }

}
