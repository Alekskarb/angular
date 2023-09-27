import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title = ''
  text = ''

  constructor() {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        txt: this.text,
      }
      // console.log('new post: ', post)
      this.onAdd.emit(post);
      this.text = this.title = '';
    }
  }

  ngOnInit() {
  }

  focusTitle() {

  }
}
