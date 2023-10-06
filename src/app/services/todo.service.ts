import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDos} from "../app.component";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  addTodo(newTodo: ToDos): Observable<ToDos> {
    return this.http.post<ToDos>('https://jsonplaceholder.typicode.com/todos', newTodo)}

  fetchTodo(): Observable<ToDos[]> {
     return  this.http.get<ToDos[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').pipe(delay(500))
  }

  removeTodo(id: number) {
    return  this.http.delete<ToDos>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}


