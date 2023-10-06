import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToDos} from "../app.component";
import {catchError, delay, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  addTodo(newTodo: ToDos): Observable<ToDos> {
    return this.http.post<ToDos>('https://jsonplaceholder.typicode.com/todos', newTodo,
      {headers: new HttpHeaders({'CustomHeader': Math.E})})}

  fetchTodo(): Observable<ToDos[]> {
     return  this.http.get<ToDos[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').pipe(
       catchError(error => {
         console.log(error.message);
         return throwError(error);
       }),
       delay(500))
  }

  removeTodo(id: number): Observable<void> {
    return  this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
  completeTodo(id: number): Observable<ToDos> {
    return this.http.put<ToDos>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}



