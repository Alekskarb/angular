import {Component} from '@angular/core';

export interface Post {
  title: string,
  txt: string,
  id?: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // posts: Post[] = [{title: 'title11', txt: 'txt11', id: 11}, {title: 'title22', txt: 'txt22', id: 22},]
  posts: Post[] = [{title: 'title11', txt: 'txt11', id: 11}, ]

  emittedPost(emittedPost: Post) {
    console.log('emitted post: ', emittedPost)
    this.posts.unshift(emittedPost);
  }
}
