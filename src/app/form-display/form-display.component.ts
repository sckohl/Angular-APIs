import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { stringify } from 'querystring';


@Component({
  selector: 'form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent {

  post: any;
url = "http://jsonplaceholder.typicode.com/posts/"
  
  
  constructor(private http: HttpClient ) {
}
/*
lesson: you don't need the input variable to be 
  declared in the Angular component. Just pass it in 
  from the HTML component as a template variable.
*/
buttonclick(textVariable){
    this.http.get(this.url + textVariable).subscribe(response =>  {this.post = response; console.log(this.post.userId + this.post.title) });
    
      // { 
      // this.post = response,
      // console.log(response)});
  //  alert('Button was clicked')
    
  };

a(){
return console.log("second method a() "+this.post)
}

  


}
