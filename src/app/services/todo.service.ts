import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {ToDos} from "../app.component";
import {catchError, delay, map, Observable, tap, throwError} from "rxjs";

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
     return this.http.get<ToDos[]>('https://jsonplaceholder.typicode.com/todos',
       // {params: new HttpParams().set('_limit', '3')}
       {params,
         observe: 'response'
       })
       .pipe(
         map((response: HttpResponse<any>) => {
             return response.body
           }
         ),
    // delay(500),
    catchError(error => {
         console.log(error.message);
         return throwError(error);
       }),
       )
  }

  removeTodo(id: number): Observable<any> {
    return  this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {observe: 'events'})
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent) {console.log(event)}
          if (event.type === HttpEventType.Response) {console.log(event)}
        })
      )
  }
  completeTodo(id: number): Observable<any> {
    return this.http.put<ToDos>(`https://jsonplaceholder.typicode.com/todos/${id}`,
      {completed: true}, {responseType: 'json'})
      // {completed: true}, {'responseType': 'text'})
  }
}



