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
  todoTitle = ''

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<ToDos[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(response => {
        this.todos = response;
      })
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }
    ;
    const newTodo: ToDos = {
      title: this.todoTitle,
      completed: false
    }
    this.http.post<ToDos>('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe(
      (todo) => {
        this.todos.push(todo)
this.todoTitle=''
      })
  }
}

