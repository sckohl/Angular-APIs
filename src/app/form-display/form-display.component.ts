import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Component({
  selector: 'form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent {

  posts: any;

  url = "http://jsonplaceholder.typicode.com/posts/"
  
  textVariable = {id: ''};
  
  constructor(private http: HttpClient ) {
}
/*
lesson: you don't need the input variable to be 
  declared in the Angular component. Just pass it in 
  from the HTML component as a template variable.
*/
buttonclick(textVariable){
    this.http.get(this.url + textVariable).subscribe(response =>  {
    this.posts = response; 
    console.log("post ID: " +this.posts.ID + ". this is the post's title " +this.posts.title) 
    console.log(this.posts)});
        
  };
}