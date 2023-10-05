import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(private http: HttpClient) {
}
  ngOnInit() {
this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
    .subscribe(response => {
      console.log(response)
    })
  }
}

