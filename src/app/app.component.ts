import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

export interface ToDos {
  id: number;
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
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }
    ;
    const newTodo: ToDos = {
      title: this.todoTitle,
      completed: false,
      id: 12434
    }
    this.http.post<ToDos>('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe(
      (todo) => {
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  getTodos() {
    this.loading = true;
    this.http.get<ToDos[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      })
  }

  removeTodo(id: number) {
    this.http.delete<ToDos>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(
          (el) => el.id !== id)
      })

  }
}

