import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay, finalize} from "rxjs";
import {TodoService} from "./services/todo.service";

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
  error = '';

  constructor(private serverService: TodoService) {
  }

  ngOnInit() {
    this.getTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    this.serverService.addTodo({
      title: this.todoTitle,
      completed: false,
      id: 12434
    }).subscribe(
      (todo) => {
        this.todos.push(todo)
        this.todoTitle = ''
      }
    )
  }

  getTodos() {
    this.loading = true;
    this.serverService.fetchTodo()
      .subscribe((response) => {
        this.todos = response;
        this.loading = false;
      },
          (error) => {this.error = error.message},
          () => {})
  }

  removeTodo(id: number) {
    this.serverService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(
          (el) => el.id !== id)
      })
  }

  completeTodo(id: number) {
    this.serverService.completeTodo(id).subscribe(todo => {
      // todo = JSON.parse(todo)
      this.todos.find((el: ToDos)=> el.id === todo.id)!.completed = true;
      console.log()
    })
  }
}

