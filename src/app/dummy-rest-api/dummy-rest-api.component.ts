import { Component, OnInit, getModuleFactory } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http'; 
@Component({
  selector: 'dummy-rest-api',
  templateUrl: './dummy-rest-api.component.html',
  styleUrls: ['./dummy-rest-api.component.css']
})
export class DummyRestAPIComponent {
  item: any;
url2 = "http://dummy.restapiexample.com/api/v1/employees"
idHeader = new HttpHeaders().set("joe","frank");
constructor(private http: HttpClient){}

getMore(){
  this.http.get(this.url2, {headers: this.idHeader}).subscribe(response => {(this.item = response)
    console.log(this.item)});
  
  
}

}
