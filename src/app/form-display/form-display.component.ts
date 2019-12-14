import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'


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


buttonclick(textVariable){
    this.http.get(this.url + textVariable).subscribe(response => { console.log(response)});
  //  alert('Button was clicked')
  return console.log(textVariable)
  };

  


}
