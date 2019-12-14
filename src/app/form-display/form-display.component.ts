import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent {

  post: any;
url = "http://jsonplaceholder.typicode.com/posts/1"
  

constructor(private http: HttpClient ) {
}


buttonclick(){
    return this.http.get(this.url).subscribe(response => { console.log(response)});
   alert('Button was clicked')
  return console.log("button click")
  };

  


}
