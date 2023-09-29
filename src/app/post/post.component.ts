import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit, OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() passedPost: Post | undefined
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('content', {static: true}) contentRef!: ElementRef

  remove() {
    this.onRemove.emit(this.passedPost?.id);
  }

  constructor() {
    console.log('constructor = 1!')
  }

  ngOnInit() {
    console.log('OnInit: = 3!', this.contentRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges: = 2!', changes);
  }

  ngDoCheck(): void {
    console.log('DoCheck: ', '= 4!');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit: = 5!');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked: = 6!');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit: = 7!');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked: = 8!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: = 9!');
  }
}
