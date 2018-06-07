import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { LinkDirective } from './directives/link.directive';
import { BoldDirective } from './directives/bold.directive';

const routes = [
  {
    path: '',
    component: NewsListComponent,
    data: {
      animation: 'list'
    }
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent,
    data: {
      animation: 'details'
    }
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
    SingleRatingComponent,
    LinkDirective,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule

  ],
  providers: [NewsService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
