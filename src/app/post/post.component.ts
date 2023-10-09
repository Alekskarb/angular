import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Post, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post?: Post

  constructor(public route: ActivatedRoute, public postService: PostsService,
              public router: Router) {
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    this.route.params.subscribe((params) => {
      console.log(params)
  this.post = this.postService.getById(+params['id'])
    })
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}
