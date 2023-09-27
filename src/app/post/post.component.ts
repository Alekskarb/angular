import {Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {

  @Input() passedPost: Post | undefined
  @ContentChild('content', {static: true}) contentRef!: ElementRef

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit: ', this.contentRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
