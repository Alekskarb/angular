import {ActivatedRouteSnapshot, CanActivateFn, Resolve, ResolveFn, Router, RouterStateSnapshot} from "@angular/router";
import {Post, PostsService} from "./posts.service";
import {inject, Injectable} from "@angular/core";
import {delay, delayWhen, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PostResolver implements Resolve<Post> {
  constructor(private postService: PostsService) {
  }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post | unknown {

    return of(this.postService.getById(+route.params['id']!))
      .pipe(delay(1500))
  }
}

// class ResolverService {
//   constructor(private postService: PostsService) {}
// getPost(id: string) {
//   this.postService.getById(+id);
// }}
//
// // export const postResolver: ResolveFn<Post> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post => {
// export const postResolver: ResolveFn<Post> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   return <Post><unknown>inject(ResolverService).getPost(route.paramMap.get('id')!);
// }
