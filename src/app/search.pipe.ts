import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(news, value) {

    return news.filter(n => {

      return n.title.includes(value);

    });

  }

}
