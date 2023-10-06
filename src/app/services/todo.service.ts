import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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
    let params = new HttpParams();
    params = params.append('_limit', '5');
    params = params.append('extra', 'additional');
     return  this.http.get<ToDos[]>('https://jsonplaceholder.typicode.com/todos',
       // {params: new HttpParams().set('_limit', '3')}
       {params}
     )
       .pipe(
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



