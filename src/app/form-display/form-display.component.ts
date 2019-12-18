import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Component({
  selector: 'form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})

@Injectable()
export class FormDisplayComponent {

  posts: any;

  url = "http://jsonplaceholder.typicode.com/posts/"
  
  textVariable: any;
  
  constructor(private http: HttpClient ) {
}
/*
lesson: you don't need the input variable to be 
  declared in the Angular component. Just pass it in 
  from the HTML component as a template variable.
*/
buttonclick(textVariable){
  console.log("current Variable value is: " + textVariable)
    this.http.get(this.url + textVariable).subscribe(response =>  {
    this.posts = response; 
    console.log("post ID: " +this.posts.id + ". this is the post's title " +this.posts.title) 
    console.log(this.posts)}
    ,error => console.error(error)
    );
    return this.textVariable =[] , console.log(this.textVariable);
  };
 
  reset(){
    this.textVariable = ''
  }
}