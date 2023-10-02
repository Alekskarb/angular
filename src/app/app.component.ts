import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string,
  text: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  e: number = Math.E
  str = 'heLLo World !'
  date = new Date()
  float = 0.425
  obj = {
    a:1, b: {c: 2, d: {f: 3, e: 4}}
  }

  posts = [
    {  title: '1111',
      text: 'qqqqqqqqqqq'},
    {  title: '1122',
      text: 'wwwwwwwwww'},
    {  title: '333',
      text: 'eeeeeeeee'}
  ]
  search = '';
  searchField = '';

  promise = new Promise(res => {
    setTimeout(() => {
      res('Promise Resolved!')
    }, 3000)
  })

  myDate: Observable<Date> = new Observable((observe) => {
    setInterval(() => {
      observe.next(new Date())
    }, 1000)
  })

  addPost() {
    this.posts.unshift({
      title: '4444',
      text: 'rrrrrrrr'
    })
  }
}
