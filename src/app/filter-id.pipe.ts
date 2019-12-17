import { Pipe, PipeTransform } from '@angular/core';
import { callbackify } from 'util';
import { posts } from './form-display/form-display.component';

@Pipe({
  name: 'filterID'
  ,pure: false
  
})
export class FilterIDPipe implements PipeTransform {

  transform(posts: any, args: string, value: string): any []{
    if (!posts) return [];
    return posts.filter(it => it[args] == value); 
  }

  // transform(item: any[]) {
 
  //     return item.find(posts => posts.id);
 
  // }
 
}
