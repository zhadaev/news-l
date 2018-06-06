import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipes/search.pipe';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsService } from './services/news.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleRatingComponent } from './components/single-rating/single-rating.component';
import { RatingService } from './services/rating.service';

const routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];


@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    SearchPipe,
    NewsListComponent,
    NewsDetailsComponent,
    SingleRatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [NewsService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
