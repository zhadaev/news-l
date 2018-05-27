import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SingleNewsComponent } from './single-news/single-news.component';

const routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'news/:id',
    component: SingleNewsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

]


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SearchPipe,
    HomePageComponent,
    SingleNewsComponent
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
export class AppModule { }
