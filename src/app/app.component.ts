import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";

export interface ToDos {
  id?: number;
  title: string;
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: ToDos[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<ToDos[]>('https://jsonplaceholder.typicode.com/posts?_limit=2')
      .subscribe(response => {
        this.todos = response;
      })
  }
}

