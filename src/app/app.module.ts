import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

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
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
