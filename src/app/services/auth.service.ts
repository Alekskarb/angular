import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuth = false;
  constructor() { }
  login(): boolean {
    return this.isAuth = true
  }

  logout(): boolean {
    return this.isAuth = false;
  }
  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000)
    })
  }
}
