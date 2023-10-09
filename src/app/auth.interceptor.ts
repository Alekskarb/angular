import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept: ', req)

    const cloned = req.clone({
      headers: req.headers.append('Auth', 'TokenValue')
    })
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type == HttpEventType.Response) {
          console.log('resp: ', event)
        }
      }))
      ;
  }
}
