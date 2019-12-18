import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterID'
  ,pure: true
  
})
export class FilterIDPipe implements PipeTransform {

  transform(posts: any, args: any, value: any): any []{
    if (!posts) return posts;
    return posts.filter(it => it[args] == value); 
  }

  // transform(item: any[]) {
 
  //     return item.find(posts => posts.id);
 
  // }
 
}
