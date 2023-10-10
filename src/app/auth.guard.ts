import {
  ActivatedRouteSnapshot,
  // CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "./services/auth.service";

// export class AuthGuard implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return undefined;
//   }
//
// }
@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated().then((isAuth: boolean) => {
      if (isAuth) {
        return true
      } else {
        this.router.navigate(['/'], {queryParams: {auth: false}})
        return false
      }
    })
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return <boolean>inject(PermissionsService).canActivate(next, state);
}
